const btn = document.getElementById("btn");

btn.addEventListener("click", btnHandler);

function btnHandler() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let HTML = "<h2> Posts </h2>";
      data.forEach((user) => {
        HTML += `
            <div>
            <h3> ${post.title} </h3>
            <p> ${post.body} </p>
        </div> 
            `;
      });
    });
}
