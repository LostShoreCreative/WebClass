function SendEmail()
{
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) =>
        {
            e.preventDefault();
            const email = document.querySelector("#email").value;
            const subject = document.querySelector("#subject").value;
            const text = document.querySelector("#text").value;
        })
}

