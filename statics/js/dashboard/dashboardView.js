function dashboardView()
{
        document.getElementById('app').innerHTML = /*HTML*/`
            <h1>Dashboard</h1>
            ${dashmain()}

            ${feedbackView()}`;;
}

function dashmain()
{
    //  Initializing variables with given values
    let html ="";
    let course = model.data.courses;

    for (let i = 0; i < course.length; i++)
    {
        //  Creating an HTML
        html += /*HTML*/`
            <div class="card" onclick="navigateView('${course[i].name}')"> 
            <img src="${course[i].img}" alt="${course[i].alt}">
                <h3>${course[i].name}</h3>
                <p>${course[i].description}</h3>
            </div>`;
    }

    return html
}

function feedbackView()
{
    //  Fetch user id

    //  Fetch feedback
    let tf = model.data.users[0].feedbacks[0];
    let html = /*HTML*/`
        <div class="name">
            <img>
            <b>${tf.name}</b></div>
            ${tf.comments}
        </div>`;

    return html;
}