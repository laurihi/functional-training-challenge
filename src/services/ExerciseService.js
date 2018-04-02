
import _ from 'lodash'

class ExerciseService {

  constructor(){

    this.exercises = []

    this.exercises.push({
      name: 'commute-by-cycling',
      unit: 'km',
      pointsPerUnit: 40
    } );
    this.exercises.push({
      name: "commute-by-walking",
      unit: 'km',
      pointsPerUnit: 60
    } );

    this.exercises.push({
      name: "stairs-climbed",
      unit: 'kerros',
      pointsPerUnit: 6
    } );

    this.exercises.push({
      name: "stairs-descended",
      unit: 'kerros',
      pointsPerUnit: 2
    } );


  }

  getExercises () {
    const copy = _.cloneDeep(this.exercises)
    return copy;
  }

}


export default new ExerciseService()
