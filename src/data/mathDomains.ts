export interface Domain {
  id: string;
  name: string;
  icon: string;
  subtopics: string[];
}

export interface TopicContent {
  definition: string;
  formulas: string[];
  examples: Array<{
    problem: string;
    solution: string;
  }>;
}

export const domains: Domain[] = [
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    icon: '➕',
    subtopics: [
      'Basic Operations',
      'Percentages', 
      'Powers & Roots',
      'Factorials',
    ],
  },
  {
    id: 'algebra',
    name: 'Algebra',
    icon: '🔢',
    subtopics: [
      'Linear Equations',
      'Quadratic Equations',
      'Polynomials',
      'Factoring',
      'Simplification',
    ],
  },
  {
    id: 'calculus',
    name: 'Calculus',
    icon: '📈',
    subtopics: [
      'Limits',
      'Derivatives',
      'Basic Integration',
      'Chain Rule',
    ],
  },
  {
    id: 'geometry-topology',
    name: 'Geometry & Topology',
    icon: '📐',
    subtopics: [
      'Euclidean Geometry',
      'Coordinate Geometry',
      'Manifolds',
    ],
  },
  {
    id: 'number-theory',
    name: 'Number Theory',
    icon: '🔢',
    subtopics: [
      'Prime Numbers',
      'GCD & LCM',
      'Modular Arithmetic',
      'Divisibility',
    ],
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: '📉',
    subtopics: [
      'Descriptive Statistics',
      'Mean & Median',
      'Variance & Standard Deviation',
      'Probability',
    ],
  },
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    icon: '🔲',
    subtopics: [
      'Matrix Operations',
      'Determinants',
      'Matrix Inverse',
      'Eigenvalues',
    ],
  },
  {
    id: 'discrete-math',
    name: 'Discrete Math',
    icon: '🔗',
    subtopics: [
      'Graph Theory',
      'Combinatorics',
    ],
  },
  {
    id: 'differential-equations',
    name: 'Differential Equations',
    icon: '🌊',
    subtopics: [
      'ODEs',
      'PDEs',
    ],
  },
  {
    id: 'emerging-fields',
    name: 'Emerging Fields',
    icon: '🚀',
    subtopics: [
      'Machine Learning Math',
      'Information Theory',
    ],
  },
  {
    id: 'abstract-algebra',
    name: 'Abstract Algebra',
    icon: '🧩',
    subtopics: [
      'Group Theory',
      'Ring Theory',
      'Field Theory',
      'Module Theory',
      'Galois Theory',
      'Category Theory',
    ],
  },
  {
    id: 'real-complex-analysis',
    name: 'Real & Complex Analysis',
    icon: '∞',
    subtopics: [
      'Metric Spaces',
      'Uniform Convergence',
      'Analytic Continuation',
      'Cauchy Sequences',
      'Residue Theorem',
    ],
  },
  {
    id: 'topology',
    name: 'Topology',
    icon: '🔄',
    subtopics: [
      'Open/Closed Sets',
      'Compactness & Connectedness',
      'Homeomorphism',
      'Homotopy Theory',
      'Fundamental Group',
    ],
  },
  {
    id: 'differential-geometry',
    name: 'Differential Geometry',
    icon: '🌐',
    subtopics: [
      'Manifolds',
      'Curvature & Torsion',
      'Riemannian Metrics',
      'Geodesics',
      'Lie Groups',
    ],
  },
  {
    id: 'measure-theory',
    name: 'Measure Theory & Integration',
    icon: '📏',
    subtopics: [
      'Lebesgue Integral',
      'Sigma-algebras',
      'Measurable Functions',
      'Fubini\'s Theorem',
    ],
  },
  {
    id: 'functional-analysis',
    name: 'Functional Analysis',
    icon: '🔬',
    subtopics: [
      'Normed Spaces',
      'Banach & Hilbert Spaces',
      'Linear Operators',
      'Spectral Theory',
    ],
  },
  {
    id: 'partial-differential-equations',
    name: 'Partial Differential Equations',
    icon: '🌊',
    subtopics: [
      'Wave Equation',
      'Heat Equation',
      'Laplace\'s Equation',
      'Method of Characteristics',
      'Green\'s Functions',
    ],
  },
  {
    id: 'fourier-laplace',
    name: 'Fourier & Laplace Transforms',
    icon: '〰️',
    subtopics: [
      'Fourier Series',
      'Discrete Fourier Transform (DFT)',
      'Laplace Transform',
      'Convolution Theorems',
      'Inverse Transforms',
    ],
  },
  {
    id: 'numerical-methods',
    name: 'Numerical Methods',
    icon: '🔢',
    subtopics: [
      'Finite Difference Methods',
      'Newton-Raphson',
      'LU Decomposition',
      'Runge-Kutta Methods',
      'Eigenvalue Approximation',
    ],
  },
  {
    id: 'optimization',
    name: 'Optimization & Operations Research',
    icon: '📊',
    subtopics: [
      'Linear Programming (Simplex Method)',
      'Nonlinear Optimization',
      'Convex Analysis',
      'Integer Programming',
      'Duality Theory',
    ],
  },
  {
    id: 'probability-stochastic',
    name: 'Probability & Stochastic Processes',
    icon: '🎲',
    subtopics: [
      'Bayes\' Theorem',
      'Markov Chains',
      'Brownian Motion',
      'Poisson Process',
      'Ito Calculus',
    ],
  },
  {
    id: 'set-theory-logic',
    name: 'Set Theory & Logic',
    icon: '🔢',
    subtopics: [
      'Zermelo-Fraenkel Axioms (ZF/ZFC)',
      'Ordinals & Cardinals',
      'Gödel\'s Incompleteness Theorems',
      'Lambda Calculus',
    ],
  },
  {
    id: 'combinatorics-graph-theory',
    name: 'Combinatorics & Graph Theory',
    icon: '🕸️',
    subtopics: [
      'Generating Functions',
      'Ramsey Theory',
      'Graph Coloring',
      'Matching & Network Flows',
    ],
  },
  {
    id: 'information-theory-crypto',
    name: 'Information Theory & Cryptography',
    icon: '🔐',
    subtopics: [
      'Entropy & Mutual Information',
      'Huffman Coding',
      'RSA Encryption',
      'Elliptic Curve Cryptography',
    ],
  },
  {
    id: 'mathematical-physics',
    name: 'Mathematical Physics',
    icon: '⚛️',
    subtopics: [
      'Quantum Field Theory',
      'Special & General Relativity (Tensor Math)',
      'Schrödinger Equation',
      'Lagrangian/Hamiltonian Mechanics',
    ],
  },
  {
    id: 'chaos-theory',
    name: 'Chaos Theory & Dynamical Systems',
    icon: '🌀',
    subtopics: [
      'Logistic Map',
      'Bifurcation Diagrams',
      'Strange Attractors',
      'Lyapunov Exponents',
    ],
  },
  {
    id: 'machine-learning-math',
    name: 'Machine Learning Mathematics',
    icon: '🤖',
    subtopics: [
      'Gradient Descent',
      'Backpropagation',
      'Loss Functions',
      'Convex Optimization',
      'Eigen decomposition in PCA',
    ],
  },
  {
    id: 'graphing',
    name: 'Graphing',
    icon: '📊',
    subtopics: [
      'Linear Functions',
      'Quadratic Functions',
      'Trigonometric Functions',
      'Parametric Plots',
    ],
  },
];

const topicContentDatabase: Record<string, Record<string, TopicContent>> = {
  'Arithmetic': {
    'Basic Operations': {
      definition: 'Basic arithmetic operations include addition, subtraction, multiplication, and division. These form the foundation of all mathematical calculations.',
      formulas: [
        'a + b = b + a \\text{ (Commutative Property)}',
        'a \\times b = b \\times a \\text{ (Commutative Property)}',
        'a + (b + c) = (a + b) + c \\text{ (Associative Property)}',
      ],
      examples: [
        { problem: '15 + 25', solution: '40' },
        { problem: '8 \\times 7', solution: '56' },
        { problem: '144 \\div 12', solution: '12' },
      ],
    },
    'Percentages': {
      definition: 'Percentages represent parts of a whole as fractions of 100. They are widely used in statistics, finance, and everyday calculations.',
      formulas: [
        '\\text{Percentage} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100\\%',
        '\\text{Percentage Increase} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%',
      ],
      examples: [
        { problem: '25\\% \\text{ of } 80', solution: '20' },
        { problem: '\\text{What % is 15 of 60?}', solution: '25\\%' },
      ],
    },
  },
  'Algebra': {
    'Linear Equations': {
      definition: 'Linear equations are algebraic equations where the highest power of the variable is 1. They represent straight lines when graphed.',
      formulas: [
        'ax + b = 0 \\text{ (Standard Form)}',
        'y = mx + c \\text{ (Slope-Intercept Form)}',
        'x = \\frac{-b}{a} \\text{ (Solution)}',
      ],
      examples: [
        { problem: '2x + 3 = 11', solution: 'x = 4' },
        { problem: '5x - 7 = 3x + 1', solution: 'x = 4' },
      ],
    },
    'Quadratic Equations': {
      definition: 'Quadratic equations are polynomial equations of degree 2. They can have 0, 1, or 2 real solutions.',
      formulas: [
        'ax^2 + bx + c = 0 \\text{ (Standard Form)}',
        'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\text{ (Quadratic Formula)}',
        '\\Delta = b^2 - 4ac \\text{ (Discriminant)}',
      ],
      examples: [
        { problem: 'x^2 + 5x + 6 = 0', solution: 'x = -2, -3' },
        { problem: 'x^2 - 4 = 0', solution: 'x = \\pm 2' },
      ],
    },
  },
  'Calculus': {
    'Derivatives': {
      definition: 'The derivative of a function represents the instantaneous rate of change or the slope of the tangent line at any point.',
      formulas: [
        '\\frac{d}{dx}[x^n] = nx^{n-1} \\text{ (Power Rule)}',
        '\\frac{d}{dx}[\\sin x] = \\cos x',
        '\\frac{d}{dx}[e^x] = e^x',
        '\\frac{d}{dx}[\\ln x] = \\frac{1}{x}',
      ],
      examples: [
        { problem: '\\frac{d}{dx}[x^3]', solution: '3x^2' },
        { problem: '\\frac{d}{dx}[2x^2 + 3x]', solution: '4x + 3' },
      ],
    },
    'Basic Integration': {
      definition: 'Integration is the reverse process of differentiation. It finds the area under a curve or the antiderivative of a function.',
      formulas: [
        '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\text{ (Power Rule)}',
        '\\int e^x dx = e^x + C',
        '\\int \\frac{1}{x} dx = \\ln|x| + C',
      ],
      examples: [
        { problem: '\\int 3x^2 dx', solution: 'x^3 + C' },
        { problem: '\\int (2x + 1) dx', solution: 'x^2 + x + C' },
      ],
    },
  },
  'Statistics': {
    'Descriptive Statistics': {
      definition: 'Descriptive statistics summarize and describe the main features of a dataset using measures of central tendency and spread.',
      formulas: [
        '\\bar{x} = \\frac{\\sum x_i}{n} \\text{ (Mean)}',
        '\\text{Median} = \\text{Middle value when ordered}',
        's^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1} \\text{ (Sample Variance)}',
      ],
      examples: [
        { problem: '\\text{Mean of } [2, 4, 6, 8, 10]', solution: '6' },
        { problem: '\\text{Median of } [1, 3, 5, 7, 9]', solution: '5' },
      ],
    },
  },
  'Abstract Algebra': {
    'Group Theory': {
      definition: 'Group theory studies algebraic structures known as groups, which consist of a set equipped with an operation that combines any two elements to form a third element.',
      formulas: [
        '(G, \\circ) \\text{ is a group if: closure, associativity, identity, inverse}',
        '|G| = \\text{order of group G}',
        '\\text{Lagrange: } |H| \\text{ divides } |G| \\text{ for subgroup H}',
      ],
      examples: [
        { problem: '\\text{Show } (\\mathbb{Z}, +) \\text{ is a group}', solution: '\\text{Satisfies all group axioms}' },
        { problem: '\\text{Order of } \\mathbb{Z}_5', solution: '5' },
      ],
    },
  },
  'Real & Complex Analysis': {
    'Metric Spaces': {
      definition: 'A metric space is a set equipped with a metric (distance function) that defines the distance between any two points in the set.',
      formulas: [
        'd(x,y) = d(y,x) \\text{ (Symmetry)}',
        'd(x,z) \\leq d(x,y) + d(y,z) \\text{ (Triangle Inequality)}',
        'd(x,y) = 0 \\iff x = y \\text{ (Identity)}',
      ],
      examples: [
        { problem: '\\text{Euclidean metric: } d(x,y) = \\sqrt{\\sum(x_i-y_i)^2}', solution: '\\text{Standard distance formula}' },
      ],
    },
  },
  'Machine Learning Mathematics': {
    'Gradient Descent': {
      definition: 'Gradient descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent.',
      formulas: [
        '\\theta_{t+1} = \\theta_t - \\alpha \\nabla J(\\theta_t)',
        '\\alpha = \\text{learning rate}',
        '\\nabla J = \\text{gradient of cost function}',
      ],
      examples: [
        { problem: '\\text{Update rule for linear regression}', solution: '\\theta_j := \\theta_j - \\alpha \\frac{\\partial J}{\\partial \\theta_j}' },
      ],
    },
  },
};

export const getDomainSubtopics = (domainName: string): string[] => {
  const domain = domains.find(d => d.name === domainName);
  return domain ? domain.subtopics : [];
};

export const getTopicContent = (domainName: string, subtopic: string): TopicContent | null => {
  return topicContentDatabase[domainName]?.[subtopic] || null;
};
