document.addEventListener('DOMContentLoaded', () => {
  if (JSON.parse(localStorage.getItem('userList'))) {
    localStorage.setItem('userList', JSON.stringify(users))
  }
  showUsers();
});

document.querySelector('.add_btn').addEventListener('click', () => {
  document.querySelector('#form').classList.remove('hidden');
});