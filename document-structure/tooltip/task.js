const generateTooltip = (text, position, size) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.classList.add('tooltip_active');
  tooltip.innerText = text;
  
  console.log(size)

  const tempCopy = tooltip.cloneNode(true);
  document.querySelector('body').appendChild(tempCopy);
  const tootipWidth = tempCopy.clientWidth;
  const tootipHeight = tempCopy.clientHeight;
  tempCopy.remove();

  switch(position) {
    case('bottom'):
      tooltip.style.top = size.bottom + 'px';
      tooltip.style.left = size.left + 'px';
      break;

    case('top'):
      tooltip.style.top = size.top - tootipHeight + 'px';
      tooltip.style.left = size.left + 'px';
      break;  
    
    case('left'):
      tooltip.style.top = size.bottom - size.height + 'px';
      tooltip.style.left = size.left - tootipWidth + 'px';
      break;  
    
    case('right'):
      tooltip.style.top = size.bottom - size.height + 'px';
      tooltip.style.left = size.right + 'px';
      break;

    default:
      break;
  }

  return tooltip
}

const clearTooltip = () => {
  if (document.querySelector('.tooltip_active')) {
    document.querySelector('.tooltip_active').remove();
  }
}


const handleClick = function(event) {
  event.preventDefault();
  clearTooltip();

  const tooltipText = event.target.getAttribute('title');
  const tooltipPosition = event.target.dataset.position;
  // const [width, height] = [event.target.clientWidth, event.target.clientHeight]
  const size = event.target.getBoundingClientRect();

  event.target.insertAdjacentElement('afterend', generateTooltip(tooltipText, tooltipPosition ? tooltipPosition : 'bottom', size));
};

const handleGlobalClick = function(event) {
  clearTooltip();

  if (event.target.classList.contains('has-tooltip')) {
    handleClick(event);
  }
};

document.querySelectorAll('.has-tooltip').forEach(el => el.addEventListener('click', handleClick));

window.addEventListener('click', handleGlobalClick);