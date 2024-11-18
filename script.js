document.addEventListener('DOMContentLoaded', function() {
  const suggestions = [
    "38 hoàng trọng mậu, Phường Tân hưng, Quận 7, Hồ chí minh",
    "Hoàng trọng mậu, Quận bà chiểu Thành phố huế",
    "Hoàng trọng mậu, Thị xã bla bla, Thị Trấn gì đó, ở đâu đó xa xa",
    "Hoàng trọng mậu, Thị xã khác, Thị Trấn khác, ở đâu đó xa xa"
  ];

  function setupAddressInput(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    input.addEventListener('focus', () => {
      updateDropdown(input.value, dropdown);
      dropdown.classList.add('active');
    });

    input.addEventListener('input', () => {
      updateDropdown(input.value, dropdown);
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  function updateDropdown(searchValue, dropdown) {
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(searchValue.toLowerCase())
    );

    dropdown.innerHTML = '';
    
    if (filteredSuggestions.length === 0) {
      const emptyItem = document.createElement('div');
      emptyItem.className = 'dropdown-item';
      emptyItem.textContent = 'Không tìm thấy địa chỉ';
      dropdown.appendChild(emptyItem);
      return;
    }

    filteredSuggestions.forEach(suggestion => {
      const item = document.createElement('div');
      item.className = 'dropdown-item';
      item.innerHTML = `
        <span>🔍</span>
        <span>${suggestion}</span>
      `;
      
      item.addEventListener('click', () => {
        const input = dropdown.previousElementSibling.previousElementSibling;
        input.value = suggestion;
        dropdown.classList.remove('active');
        updateRouteInfo();
      });

      dropdown.appendChild(item);
    });
  }

  function updateRouteInfo() {
    const startAddress = document.getElementById('startAddress').value;
    const endAddress = document.getElementById('endAddress').value;
    const routeInfo = document.getElementById('routeInfo');

    if (startAddress || endAddress) {
      routeInfo.style.display = 'block';
    } else {
      routeInfo.style.display = 'none';
    }
  }

  setupAddressInput('startAddress', 'startAddressDropdown');
  setupAddressInput('endAddress', 'endAddressDropdown');
});