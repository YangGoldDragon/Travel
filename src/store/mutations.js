export default {
  handleCityClick(state, city){
    this.state.city = city;
    try {
      localStorage.city = city;
    }catch (e){}
  }
}
