var name = "name"

const t = function f() {
    console.log(this.name)
}

t()
// undefined