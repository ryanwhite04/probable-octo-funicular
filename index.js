let profile = JSON.parse(localStorage.getItem('profile')) || {};

function listen(id, event, listener) {
  // element =
  document.getElementById(id).addEventListener(event, listener)
}

function toggle(id) {
  document.getElementById(id).classList.toggle('hidden')
}
listen('save-button', 'click', e => toggle('save-dialog'))
listen('distract-button', 'click', e => toggle('distract-dialog'))
listen('help-button', 'click', e => toggle('help-dialog'))
listen('profile-button', 'click', e => toggle('profile-dialog'))
listen('save-profile', 'click', e => localStorage.setItem('profile', JSON.stringify(profile)))

let inputs = [...document.getElementById('profile-dialog').getElementsByTagName('input')];

inputs.map(input => {
  input.value = profile[input.getAttribute('name')]
  input.addEventListener('change', e => {
    console.log('change', e, input)
    profile[input.getAttribute('name')] = input.value;
  })
})