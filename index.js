let ace4members = document.querySelectorAll(".img-responsive");
let memberList = [
  {
    initial: "SHUBHAM",
    mid: '"SHADOW"',
    last: "RAWAT",
  },
  {
    initial: "SHIVANG",
    mid: '"ECHO"',
    last: "SAKLANI",
  },
  {
    initial: "NITESH",
    mid: '"SHIELD"',
    last: "RAWAT",
  },
  {
    initial: "KARTICK",
    mid: '"KARMA"',
    last: "VERMA",
  },
];

function showMemberDetail(e) {
  let memberElement = e.target;
  let memberName = e.target.dataset.member;
  console.log(e.target.dataset.member);
  let index;

  if (memberName == "shadow") index = 0;
  else if (memberName == "echo") index = 1;
  else if (memberName == "shield") index = 2;
  else index = 3;

  document.querySelector(".initial").textContent = memberList[index].initial;
  document.querySelector(".mid").textContent = memberList[index].mid;
  document.querySelector(".last").textContent = memberList[index].last;

  setTimeout(() => {
    document.querySelector(".inner-left").classList.add("hide");
    document.querySelector(".inner11").classList.remove("hide");
  }, 0);
}

function showTeamDetail() {
  document.querySelector(".inner-left").classList.remove("hide");
  document.querySelector(".inner11").classList.add("hide");
}

ace4members.forEach((member) => {
  member.addEventListener("mouseover", showMemberDetail);
  member.addEventListener("mouseout", showTeamDetail);
});
