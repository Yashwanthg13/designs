const designs = [
  { file: 'images/blouse-01.svg', name: 'Classic Round Neck', note: 'Minimal front pattern' },
  { file: 'images/blouse-02.svg', name: 'V-Neck Border', note: 'Contrast edge detailing' },
  { file: 'images/blouse-03.svg', name: 'Boat Neck Floral', note: 'Light floral motif' },
  { file: 'images/blouse-04.svg', name: 'High Neck Embroidery', note: 'Thread-inspired accents' },
  { file: 'images/blouse-05.svg', name: 'Back Tie Design', note: 'Decorative tie-string style' },
  { file: 'images/blouse-06.svg', name: 'Sleeveless Festive', note: 'Simple festive layout' },
  { file: 'images/blouse-07.svg', name: 'Half Sleeve Pattern', note: 'Bold sleeve bands' },
  { file: 'images/blouse-08.svg', name: 'Princess Cut', note: 'Curved stitch guides' },
  { file: 'images/blouse-09.svg', name: 'Mirror Work Mock', note: 'Reflective dot pattern' },
  { file: 'images/blouse-10.svg', name: 'Bridal Style Sample', note: 'Rich decorative composition' }
];

const gallery = document.getElementById('gallery');
const template = document.getElementById('card-template');

designs.forEach((design, index) => {
  const card = template.content.cloneNode(true);
  const image = card.querySelector('img');
  const title = card.querySelector('h2');
  const note = card.querySelector('p');

  image.src = design.file;
  image.alt = `${design.name} blouse design`;
  title.textContent = `${index + 1}. ${design.name}`;
  note.textContent = design.note;

  gallery.appendChild(card);
});
