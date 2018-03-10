
import _ from 'lodash'

class ExerciseService {

  constructor(){

    this.exercises = new Map()

    this.exercises.set( "Työmatkapyöräily", {
      unit: 'km',
      pointsPerUnit: 40
    } );
    this.exercises.set( "Työmatkakävely", {
      unit: 'km',
      pointsPerUnit: 60
    } );
    this.exercises.set( "Työmatkauinti", {
      unit: 'km',
      pointsPerUnit: 1500
    } );

    this.exercises.set( "Portaiden kiipeäminen", {
      unit: 'kerrosta',
      pointsPerUnit: 6
    } );

    this.exercises.set( "Portaiden laskeutuminen", {
      unit: 'kerrosta',
      pointsPerUnit: 2
    } );
    this.exercises.set( "Lankutus", {
      unit: 'minuuttia',
      pointsPerUnit: 50
    } );

  }

  getExercises () {
    const copy = _.cloneDeep(this.exercises)
    return copy;
  }

}


export default new ExerciseService()
