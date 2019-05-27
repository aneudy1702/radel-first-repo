var dominicanos = {
  radel: {
    hijos: false,
    edad: 19,
    escuelas: {
      adventista: {
        carrera: 'volleyball'
      },
      uasd: {
        carrera: 'contable'
      }
    }
  },
  aneudy: {
    hijos: true,
    edad: 19,
    escuelas: {
      adventista: {
        carrera: 'panadero'
      },
      uasd: {
        carrera: 'tira piedra'
      }
    }
  }
};

var argentinos = {
  principe: {
    hijos: true,
    edad: 19,
    escuelas: {
      adventista: {
        carrera: 'volleyball'
      },
      uasd: {
        carrera: 'contable'
      }
    }
  },
  misael: {
    hijos: true,
    edad: 19,
    escuelas: {
      adventista: {
        carrera: 'panadero'
      },
      uasd: {
        carrera: 'tira piedra'
      }
    }
  }
}

var personas = [
  dominicanos,
  argentinos
];

module.exports = {
  dominicanos,
  argentinos,
  personas
}
