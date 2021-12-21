// JAVASCRIPT FOR COMMENTS HERE

// ADD COMMENT FORM HANDLER
async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// EDIT COMMENT FORM HANDLER
async function editFormHandler(event) {
  event.preventDefault();
  const comment_text = document.querySelector(
    'textarea[name="edit-comment-body"]'
  ).value;
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      comment_text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// DELETE FORM HANDLER
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/comments/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// LISTENERS
document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);

document
  .querySelector('.edit-comment-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('.delete-comment-btn')
  .addEventListener('click', deleteFormHandler);
