const commentFormhandler = async function (event) {
    event.preventDefault()
    const name = document.querySelector('input[name="project-name"]').value;
    const description = document.querySelector('textarea[name="project-desc"]').value;
    const project_id = document.querySelector('input[name="post-id"]').value;

        await fetch(`/api/projects/edit/${project_id}`, {
            method:'PUT',
            body: JSON.stringify({
                name,
                description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        document.location.replace("/");
    }


document.querySelector('.new-project-form').addEventListener('submit', commentFormhandler)