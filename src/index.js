class Sorter {
  constructor() {
   this.array = [];
   this.sorting = (left,right) => left-right;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    let sortarray = [];
    for(let index=0; index<this.arr.length;index++)
    {
      sortarray.push(this.array[index]);
    }
    return sortarray;
  }

  sort(indices) {
    let sortarray = [];
    for(var index=0; index<indices.length;index++){
      sortarray.push(this.array[indices[index]]);
    }
    sortarray.sort(this.comparator);
    for(var index=0; index<indices.length;index++){
      this.arr.splice(indices[index],1,sortarray[index]);
    }
    
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;