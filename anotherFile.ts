abstract class Shape {
    abstract perimeter(): number;
    abstract sidesCount(): number;
    abstract draw(): void;
}

class Square extends Shape {
    constructor(public size: number) {
        super();
    }
    perimeter(): number {
        return this.size * 4;
    };
    sidesCount(): number {
        return 4;
    };
    draw(): void {
        console.log("its a square!");
        
    }
}

class Triangle extends Shape {
    constructor(public a:number,public b:number,public c:number) {
        super()
    }
    perimeter(): number {
        return this.a + this.b + this.c;
    }
    sidesCount(): number {
        return 3;
    }
    draw(): void {
        console.log("its a trangle");
        
    }
}
class List <gP> {
    private values: gP[] =[];
    constructor(initialData?: gP[]) {
        this.values = initialData || [];   
    }

    public add (data: gP): gP[] {
        this.values.push(data);
        return this.values;
    } 
    public revome (data: gP): gP[] {
        if this.values == true 
        this.values.pop(data);
        return
    }
    public from (data)
}