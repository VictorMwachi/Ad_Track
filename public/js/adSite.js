const adOne = document.getElementById("ad-one");

function generateGCLID(e){
  e.preventDefault();
  const randomBytes = crypto.getRandomValues(new Uint8Array(16));
  const gclid = Array.from(randomBytes,byte=>byte.toString(16).padStart(2,'0')).join('');
  console.log(gclid)
  return gclid
}
adOne.addEventListener('click',generateGCLID);