var TurnGame = (function() {
  var instance;
  var initiate = function(heroName) {
    var hero = {
      name: heroName,
      lv: 1,
      maxHp: 100,
      hp: 100,
      xp: 0,
      att: 10
    };
    return {
      showLevel: function() {
        getDocumentById('hero-level').innerHTML = 'Lv.' + hero.lv;
        return this;
      },
      showXp: function() {
        var self = this;
        if (hero.xp > 15 * hero.lv) {
          hero.xp -= 15 * hero.lv;
          hero.maxHp += 10;
          hero.hp = hero.maxHp;
          hero.att += hero.lv;
          hero.lv++;
          setTimeout(function() {
            self.setMsg('Level Up!');
          }, 1000);
        }
        document.getElementById('hero-xp').innerHTML = 'XP: ' + hero.xp + '/' + 15 * hero.lv;
        document.getElementById('hero-att').innerHTML = 'ATT: ' + hero.att;
        return this.showLevel().showHp(); //이건 뭘까???
      },
      showHp:function(){
        if(hero.hp<0){
          return// 여기서부터 다시 시작
        }
      }
  }
}
}
}
})
