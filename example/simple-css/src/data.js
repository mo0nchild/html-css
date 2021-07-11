const data = [
    {
        name: "Richard Hendricks",
        position: "Founder & CEO",
        img: "images/team0.png"
    },
    {
        name: "Dinesh Chugtai",
        position: "Senior Programmer",
        img: "images/team1.png"
    },
    {
        name: "Bertram Gilfoyle",
        position: "Chief Systems Architect",
        img:"images/team2.png"
    },
    {
        name: "Jared Dunn",
        position: "Chief Operating Officer",
        img:"images/team3.png"
    },
    {
        name: "Monica Hall",
        position: "Chief Financial Officer",
        img:"images/team4.png"
    },
    {
        name: "Nelson Bighetti",
        position: "Majority Investor",
        img:"images/team5.png"
    }
];

const temp = (user) =>{
    return `<td>
    <div class = "team-member">
      <img src="src/${user.img}" alt="">
        <h3 style="font-size: 24px;">${user.name}</h3>
        <p style="font-size: 18px; font-style: italic;">${user.position}</p>
    </div>
  </td>`
}