//1.Event propagation - determines in which order the elements receive the event
//2.Event Bubbling: Child to parent - default - When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components.
//3.Event Capturing - It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.
//event.target, event.currentTarget (current event), this.target aks event.currentTarget, event.target - origin of bubbling (origing of event)
//How to stop propagation? - event.stoppropagation()
//What is event delegation? -  Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

const div = document.querySelector(".divclass");
div.addEventListener("click", function (event) {
    alert(
        "Target " +
            event.target.className +
            "Current Target = " +
            event.currentTarget.className
    );
});
const form = document.querySelector(".formclass");
form.addEventListener("click", function (event) {
    alert(
        "Target " +
            event.target.className +
            "Current Target = " +
            event.currentTarget.className
    );
});
const button = document.querySelector(".buttonclass");
button.addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
        alert(
            "Target " +
                event.target.className +
                "Current Target = " +
                event.currentTarget.className
        );
    },
    true
);

const listDiv = document.querySelector(".list-div");

listDiv.addEventListener("click", function (event) {
    console.log(event.target.innerHTML);
});

const toggleButton = document.querySelector(".toggle-model");
const mainDiv = document.querySelector(".main");
const modelContainer = document.querySelector(".model-content");
function toggleModel(toggle) {
    modelContainer.style.display = toggle ? "flex" : "none ";
}
toggleButton.addEventListener("click", function (event) {
    console.log(event.target);
    toggleModel(true);
});

mainDiv.addEventListener("click", function (event) {
    if (event.target.className == "main") {
        toggleModel(false);
    }
});
