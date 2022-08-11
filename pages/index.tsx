export default function Index() {
  fetch('https://ncors.vercel.app/api/cors')
  .then(d=>d.json())
  .then(d=>console.log(d))
  return (
    <p>
      To test the CORS route, open the console in a new tab on a different
    </p>
  )
}
