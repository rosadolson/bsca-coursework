function Monster(name, diet, img){
    this.name = name
    this.diet = diet
    this.img = img
}

const monsters = []

const jason = new Monster('jason voorhees', ['monster energy'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jo_OgF4rJaizQPPbyIqUvFJQvlKgx2E3coPBoZuS80sKTWyl-g')
const frankenstein = new Monster('frankenstein', ['small children', 'annoying villagers'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy82J3vzRVULkATH_UBy9M7a49ix3OVLrCSyawyJLqSNH55kBh')
const yeti = new Monster('abominable snowman', ['snow cones','stray skiers'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRq5qEVJxCAdX2H2ALdL1ErMTZI-MX5ELqArSYuGpoWd52HlbaA')
const dracula = new Monster('dracula', ['blood', 'expensive wine'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Imy2Lvr2WLHs9Rj7CM4ISLdgN_6LDe_IQe0WTSzgUkEVwJpH')
const mike = new Monster('mike wazowski', ['not snow cones', 'cheerios'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbu1MsstJRnCdRRXTvJFhlvTtBxxuh0fh16EjOU8EqH3SDc_y')

monsters.push(jason, frankenstein, yeti, dracula, mike);
//console.log(monsters);

const monsterVue = {
    el: "#monster-app",
    data: {
        title: "monster mash",
        monsters: monsters,
        newMonsterName: '',
        newMonsterDiet: '',
        newMonsterImg: ''
    },
    methods: {
        submitMonster: function(){
            const name = this.newMonsterName
            const diet = this.newMonsterDiet.split(",")
            const image = this.newMonsterImg
            const monster = new Monster(name, diet, image)

            this.monsters.push(monster)

            this.newMonsterName = ''
            this.newMonsterImg = ''
            this.newMonsterDiet = ''
        }
    },
}

new Vue(monsterVue); 

