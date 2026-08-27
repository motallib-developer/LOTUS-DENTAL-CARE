const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("appointmentForm").addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const text=`Hello Lotus Dental Care,

I would like to book an appointment.

Name: ${d.get("name")}
Phone: ${d.get("phone")}
Preferred date: ${d.get("date")}
Preferred time: ${d.get("time")}
Service: ${d.get("service")}
Message: ${d.get("message") || "No additional message."}`;
  window.open("https://wa.me/917987361963?text="+encodeURIComponent(text),"_blank","noopener");
});
