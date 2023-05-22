window.addEventListener('load', () => {

	// Query selectors for different tags based on ids
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {

		//Prevents the default action of "sumbit" event
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		//Creating elements and buttons when a new task is created using the "add-new-task" button.
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerHTML = '<i class="gg-check-o"></i>';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerHTML = '<i class="gg-trash-empty"></i>';

		// Adding the created elements to the respective parent elements 
		task_actions_el.appendChild(task_done_el)
		task_actions_el.appendChild(task_delete_el)
		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);

		//Resetting the value of the text field after a new task has been addded.
		input.value = '';

		task_input_el.addEventListener('click', (e) => {
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
		});

		// Click event listener for the "done" button 
		task_done_el.addEventListener('click', (e) => {

			// If the task is marked as done, then on clicking mark it as undone and also change the icon back to a check mark  
			if (task_input_el.style.textDecoration === "line-through") {
				task_done_el.innerHTML = '<i class="gg-check-o"></i>'
				task_input_el.style.textDecoration = "none"
			}
			
			// If the task is not marked as done, then on clicking mark it as done and change the icon to the undo button.
			else {
				task_done_el.innerHTML = '<i class="gg-arrow-left-o"></i>'
				task_input_el.style.textDecoration = "line-through"
			}
		});

		// Click event listener for the "delete button"
		task_delete_el.addEventListener('click', (e) => {
			task_el.remove();
		});
	});
});