// Simple mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
  });
}


function composeEmail(e){
  e.preventDefault();
  const form = document.getElementById('booking-form');
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const dog = data.get('dog') || '';
  const suburb = data.get('suburb') || '';
  const length = data.get('length') || '';
  const time = data.get('time') || '';
  const notes = data.get('notes') || '';
  const to = 'meganhjohnson123@gmail.com'; // TODO: replace with your real email
  const subject = encodeURIComponent(`Booking request for ${dog} (${length})`);
  const body = encodeURIComponent(
`Hi Eastern Tail Treks,

I’d like to book a walk.

Name: ${name}
Email: ${email}
Dog: ${dog}
Suburb: ${suburb}
Length: ${length}
Preferred time: ${time}

Notes:
${notes}

Thanks!`
  );
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
}


// Reviews carousel logic
(function(){
  const track = document.querySelector('.carousel-track');
  if(!track) return;
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  let index = 0;
  function slide(dir){
    const cards = track.children;
    if(!cards || !cards.length) return;
    index = (index + dir + cards.length) % cards.length;
    const cardWidth = cards[0].getBoundingClientRect().width + 16; // gap
    track.style.transform = `translateX(${-index * cardWidth}px)`;
  }
  prev && prev.addEventListener('click', ()=>slide(-1));
  next && next.addEventListener('click', ()=>slide(1));
})();


// Fallback: if Formspree endpoint is placeholder, open mailto with details
(function(){
  const form = document.getElementById('booking-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    const action = form.getAttribute('action') || '';
    if(action.includes('xxxxabcd')){
      e.preventDefault();
      const data = new FormData(form);
      const to = 'meganhjohnson123@gmail.com'; // TODO: replace with your real email
      const subject = encodeURIComponent(`Booking request for ${data.get('dog') || 'your dog'} (${data.get('length') || ''})`);
      const body = encodeURIComponent(
`Hi Eastern Tail Treks,

I’d like to book a walk.

Name: ${data.get('name')||''}
Email: ${data.get('email')||''}
Dog: ${data.get('dog')||''}
Suburb: ${data.get('suburb')||''}
Length: ${data.get('length')||''}
Preferred time: ${data.get('time')||''}

Notes:
${data.get('notes')||''}

Thanks!`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }
  });
})();
