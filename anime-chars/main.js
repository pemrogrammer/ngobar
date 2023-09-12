(function () {
  const charList = [
    {
      title: "Kakashi Hatake",
      description: `Kakashi Hatake (派竹 歌々子, Hatake Kakashi) adalah shinobi Konohagakure dari klan Hatake. Terkenal sebagai Kakashi si Sharingan (写輪眼のカカシ, Sharingan no Kakashi), dia adalah salah satu ninja Konoha yang paling berbakat; secara teratur tampak suka memberi nasihat dan berkepemimpinan meskipun dia tidak menyukai tanggung jawab pribadi. Untuk murid-muridnya di Tim 7, Kakashi mengajarkan pentingnya kerja sama tim, sebuah pelajaran yang dia terima, bersama dengan Sharingan, dari teman masa kecilnya, Obito Uchiha. Setelah Perang Dunia Shinobi Keempat, Kakashi menjadi Hokage Keenam (六代目火影, Rokudaime Hokage; Secara harfiah berarti "Bayangan Api Keenam").`,
      image: `https://www.superherodb.com/pictures2/portraits/10/050/11580.jpg?v=1596499200`,
      color: "black",
      url: "https://naruto.fandom.com/id/wiki/Kakashi_Hatake",
    },
    {
      title: "Naruto Uzumaki",
      description: `Naruto Uzumaki (渦巻 鳴門, Uzumaki Naruto) adalah shinobi dari Konohagakure. Dia menjadi jinchūriki dari Ekor Sembilan pada hari kelahirannya — sebuah nasib yang menyebabkan dia dijauhi oleh sebagian besar penduduk Konoha sepanjang masa kecilnya. Setelah bergabung dengan Tim Kakashi, Naruto bekerja keras untuk mendapatkan pengakuan desa sambil mengejar mimpinya untuk menjadi Hokage. Pada tahun-tahun berikutnya, melalui banyak kesulitan dan cobaan berat, ia menjadi ninja yang cakap yang dianggap sebagai pahlawan baik oleh penduduk desa, dan segera setelah itu, seluruh dunia, sehingga dikenal sebagai Pahlawan dari Konoha (木ノ葉隠れの英雄, Konohagakure no Eiyū; Secara harfiah berarti "Hero of the Hidden Tree Leaves"). Dia segera terbukti menjadi salah satu faktor utama dalam memenangkan Perang Dunia Shinobi Keempat, yang membawanya mencapai mimpinya dan menjadi Hokage Ketujuh (七代目火影, Nanadaime Hokage; Secara harfiah berarti "Bayangan Api Ketujuh").`,
      image:
        "https://simg.nicepng.com/png/small/2-27376_naruto-uzumaki-profile-naruto-uzumaki-naruto-1st-cosplay.png",
      color: "orange",
      url: "https://naruto.fandom.com/id/wiki/Naruto_Uzumaki",
    },
    {
      title: "Sasuke Uchiha",
      description: `Sasuke Uchiha (団扇 佐助, Uchiha Sasuke) adalah salah satu anggota terakhir klan Uchiha yang masih bertahan dari Konohagakure. Setelah kakaknya, Itachi, membantai klan mereka, Sasuke berusaha mewujudkan misinya dalam rangka untuk membalas dendam dengan membunuh Itachi. Dia dimasukkan ke Tim 7 saat menjadi seorang ninja dan, melalui persaingan dengan rival dan sahabatnya, Naruto Uzumaki, Sasuke mulai mengembangkan keahliannya. Tidak puas dengan kemajuannya, ia pergi dari Konoha sehingga ia bisa memperoleh kekuatan yang dibutuhkan untuk membalas dendam. Tahun-tahunnya untuk membalas dendam menjadi semakin berat, tidak masuk akal dan mengasingkan dia dari orang lain, sehingga membuatnya menjadi penjahat internasional. Setelah membuktikan dirinya sebagai penolong dalam mengakhiri Perang Dunia Shinobi Keempat dan dengan senang hati dibebaskan oleh Naruto, Sasuke memutuskan untuk kembali ke Konoha dan mengabdikan hidupnya untuk membantu melindungi desa serta penduduknya.`,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtcjT1sFM6EvMmTBfPNpAS0ULqwQO0YtVHTlzSr04Ch74idvVQrE8bsTdMPtQsfLvaWI&usqp=CAU",
      color: "blue",
      url: "https://naruto.fandom.com/id/wiki/Sasuke_Uchiha?so=search",
    },
  ];

  const contentTitle = document.getElementById("content-title"),
    contentDescription = document.getElementById("content-description"),
    contentImage = document.getElementById("content-image"),
    itemList = document.getElementsByClassName("item"),
    readUrl = document.getElementById("read-url");

  // Set Value onload
  contentTitle.innerText = charList[0].title;
  contentDescription.innerText = charList[0].description;
  contentImage.setAttribute("src", charList[0].image);
  document.body.style.backgroundColor = charList[0].color;
  readUrl.setAttribute("href", charList[0].url);

  for (let index = 0; index < itemList.length; index++) {
    const currentItem = itemList[index];
    currentItem.children[0].setAttribute("src", charList[index].image);

    currentItem.addEventListener("click", function () {
      contentTitle.innerText = charList[index].title;
      contentDescription.innerText = charList[index].description;
      contentImage.setAttribute("src", charList[index].image);
      document.body.style.backgroundColor = charList[index].color;
      readUrl.setAttribute("href", charList[index].url);

      //   Set Active
      const currentActive = document.getElementsByClassName("active");
      currentActive[0].className = currentActive[0].className.replace(
        " active",
        ""
      );
      this.className += " active";
    });
  }
})();
