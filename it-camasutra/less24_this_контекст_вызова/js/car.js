var car1 = {
    name: 'Reno StepWay',
    isTurnOn: false,
    speed: 0,
        engine: {
            v:1.6,
            horsesPower:120,
            isTurnOn: false

        },
        start: function(){
        this.isTurnOn= true;
        this.speed=10;
        this.engine.isTurnOn = true;
        

        }
}
console.log('car1.name>'+car1.name, 'car1.engine.horsesPower>'+car1.engine.horsesPower);
car1.engine.horsesPower =125;
console.log('car1.engine.horsesPower =125>'+car1.name, car1.engine.horsesPower);