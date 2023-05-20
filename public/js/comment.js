const commentFormhandler = async function (event) {
    event.preventDefault()
    const project_id = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

    if(body){
        await fetch('/api/comment', {
            method:'POST',
            body: JSON.stringify({
                project_id,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        document.location.reload()
    }
}

document.querySelector('#new-comment-form').addEventListener('submit', commentFormhandler)