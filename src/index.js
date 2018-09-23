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
    let array = [];
    for(let index=0; index<this.array.length;index++)
    {
      array.push(this.array[index]);
    }
    return array;
  }

  sort(indices) {
    let array = [];
    for(var index=0; index<indices.length;index++){
      array.push(this.array[indices[index]]);
    }
    array.sort(this.comparator);
    for(var index=0; index<indices.length;index++){
      this.array.splice(indices[index],1,array[index]);
    }
    
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;