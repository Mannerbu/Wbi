var STORAGE_KEY = "todoList"
window.todoStorage = {
	fetch() {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save(todoList) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
	}

}
