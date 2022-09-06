const setActiveClass = (items, href) => {
  items.forEach(i => {
    let attr = i.getAttribute('href');
    i.classList.remove('active');
    if(attr === href) {
      i.classList.add('active');
    }
  });
}

const setPoint = (entry) => {
  if(entry.classList.contains('first__observer')) {
    setActiveClass(pointsItem, '#first');
  }
  if(entry.classList.contains('goods__observer')) {
    setActiveClass(pointsItem, '#goods');
  }
  if(entry.classList.contains('galvanization__observer')) {
    setActiveClass(pointsItem, '#galvanization');
  }
  if(entry.classList.contains('froze__observer')) {
    setActiveClass(pointsItem, '#froze');
  }
  if(entry.classList.contains('coloring__observer')) {
    setActiveClass(pointsItem, '#coloring');
  }
  if(entry.classList.contains('delivery__observer')) {
    setActiveClass(pointsItem, '#delivery');
  }
  if(entry.classList.contains('price__observer')) {
    setActiveClass(pointsItem, '#price');
  }
}

// sections observer
const observerSection = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      setPoint(entry.target);
    }
  })
}, {
  threshold: 1
});

observerPoints.forEach(observer => {
  observerSection.observe(observer);
});
