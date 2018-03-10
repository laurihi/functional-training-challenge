
import _ from 'lodash'

class SportsService {

  constructor(){

    this.sports = new Map()

    this.sports.set( "Työmatkapyöräily", {
      unit: 'km',
      pointsPerUnit: 40
    } );
    this.sports.set( "Työmatkakävely", {
      unit: 'km',
      pointsPerUnit: 60
    } );
    this.sports.set( "Työmatkauinti", {
      unit: 'km',
      pointsPerUnit: 1500
    } );

    this.sports.set( "Portaiden kiipeäminen", {
      unit: 'kerrosta',
      pointsPerUnit: 6
    } );

    this.sports.set( "Portaiden laskeutuminen", {
      unit: 'kerrosta',
      pointsPerUnit: 2
    } );
    this.sports.set( "Lankutus", {
      unit: 'minuuttia',
      pointsPerUnit: 50
    } );

  }

  printStuff(){
    console.log('From sports service')
  }

  getSports () {
    const copy = _.cloneDeep(this.sports)
    return copy;
  }

}


export default new SportsService()
