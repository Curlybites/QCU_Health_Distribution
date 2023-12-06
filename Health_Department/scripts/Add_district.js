let district_form = document.getElementById('district_form');

district_form.addEventListener('submit', function (e) {
  e.preventDefault();
  add_district();
});

  function add_district() {
    let data = new FormData();
    data.append('district_no', district_form.elements['districtNumber'].value);
    data.append('add_district', '');

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "ajax/Add_district.php", true);

    xhr.onload = function () {
      var myModal = document.getElementById('district-m');
      var modal = bootstrap.Modal.getInstance(myModal);
      modal.hide();

      if (this.responseText == 1) {
        alert('success', 'New District Added');
        feature_s_form.elements['districtNumber'].value = '';
        get_features();
      } else {
        alert('error', 'Server Maintenance');
      }
    }

    xhr.send(data);
  }

  function get_district() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "ajax/Add_district.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        document.getElementById('districts-data').innerHTML = this.responseText;

    }
    xhr.send('get_district');
}

window.onload = function () {
  get_district();
}