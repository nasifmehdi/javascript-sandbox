class Meal{
    constructor(name,calories){
      this._id=Math.random().toString(16).slice(2)
      this._name=name
      this._calories=calories
    }

}
class Workout{
    constructor(name,calories){
        this._id=Math.random().toString(16).slice(2)
        this._name=name
        this._calories=calories
      }
}
class CalorieTracker{
    
    constructor(){
        this._calorieLimit = 2000
        this._totalCalories = 0
        this._meals = []
        this._workouts = []
    }
    addMeal(meal){
        this._meals.push(meal)
        this._totalCalories+=meal._calories
    }
    addWorkout(workout){
        this._workouts.push(workout)
        this._totalCalories-=workout._calories

    }
}

const tracker = new CalorieTracker()

const meal = new Meal('breakfast',232)
const meal2 = new Meal('lunch',768)
const workout = new Workout('pushup',593)

tracker.addMeal(meal)
tracker.addMeal(meal2)
tracker.addWorkout(workout)

console.log(tracker._totalCalories);

