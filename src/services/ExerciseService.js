
import _ from 'lodash'

class ExerciseService {

  constructor(){

    this.exercises = []

    this.exercises.push({
      name: 'Työmatkapyöräily',
      unit: 'km',
      pointsPerUnit: 40
    } );
    this.exercises.push({
      name: "Työmatkakävely",
      unit: 'km',
      pointsPerUnit: 60
    } );

    this.exercises.push({
      name: "Portaiden kiipeäminen",
      unit: 'kerrosta',
      pointsPerUnit: 6
    } );

    this.exercises.push({
      name: "Portaiden laskeutuminen",
      unit: 'kerrosta',
      pointsPerUnit: 2
    } );


  }

  getExercises () {
    const copy = _.cloneDeep(this.exercises)
    return copy;
  }

}


export default new ExerciseService()
