const generateTooltip = (text, position, width, height) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.classList.add('tooltip_active');
  tooltip.innerText = text;

  let positionOption;
  switch(position) {
    case('bottom'):
      positionOption = `${0 - height}px`;
      // positionOption = `${0 - tooltip.clientHeight}px`;
      tooltip.style.top = positionOption;
      break;

    case('top'):
      positionOption = `${0 + height}px`;
      // positionOption = `${0 - tooltip.clientHeight}px`;
      tooltip.style.bottom = positionOption;
      break;  
    
    case('left'):
      positionOption = `${0 - width}px`;
      tooltip.style.right = positionOption;
      tooltip.style.top = '0px';
      break;  
    
    case('right'):
      positionOption = `${0 + width}px`;
      tooltip.style.left = positionOption;
      tooltip.style.top = '0px';
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
  const [width, height] = [event.target.clientWidth, event.target.clientHeight]

  event.target.insertAdjacentElement('beforeEnd', generateTooltip(tooltipText, tooltipPosition ? tooltipPosition : 'bottom', width, height));
};

const handleGlobalClick = function(event) {
  clearTooltip();

  if (event.target.classList.contains('has-tooltip')) {
    handleClick(event);
  }
};

document.querySelectorAll('.has-tooltip').forEach(el => el.addEventListener('click', handleClick));

window.addEventListener('click', handleGlobalClick);