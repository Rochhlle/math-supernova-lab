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
      definition: 'A linear equation is an algebraic equation in which the highest power of the variable(s) is 1. It forms a straight line when plotted on a graph. Standard forms include: One variable: ax + b = 0, Two variables: ax + by + c = 0, Three variables: ax + by + cz + d = 0.',
      formulas: [
        'ax + b = 0 \\text{ (Standard Form)}',
        'y = mx + c \\text{ (Slope-Intercept Form)}',
        'x = \\frac{-b}{a} \\text{ (Solution for ax + b = 0)}',
        'ax + by + c = 0 \\text{ (Two variables)}',
      ],
      examples: [
        { problem: '3x + 6 = 0', solution: 'x = -2' },
        { problem: '2x + 3 = 11', solution: 'x = 4' },
        { problem: '5x - 7 = 3x + 1', solution: 'x = 4' },
      ],
    },
    'Quadratic Equations': {
      definition: 'A quadratic equation is of the form ax² + bx + c = 0, where a ≠ 0. They can be solved by factorization, quadratic formula, or completing the square. The discriminant D = b² - 4ac determines the nature of roots.',
      formulas: [
        'ax^2 + bx + c = 0 \\text{ (Standard Form)}',
        'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\text{ (Quadratic Formula)}',
        '\\Delta = b^2 - 4ac \\text{ (Discriminant)}',
        '\\text{Vertex} = \\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)',
      ],
      examples: [
        { problem: 'x^2 + 5x + 6 = 0', solution: 'x = -2, -3 \\text{ (by factoring)}' },
        { problem: 'x^2 - 4 = 0', solution: 'x = \\pm 2' },
        { problem: 'x^2 + 6x + 5 = 0', solution: 'x = -1, -5' },
      ],
    },
    'Polynomials': {
      definition: 'A polynomial is an algebraic expression made up of terms of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where aₙ are coefficients, x is variable, and n is a non-negative integer. Operations include addition, subtraction, multiplication, and division.',
      formulas: [
        '\\text{General Form: } a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0',
        '\\text{Factor Theorem: If } f(a) = 0, \\text{ then } (x-a) \\text{ is a factor}',
        '\\text{Remainder Theorem: Remainder when } f(x) \\text{ is divided by } (x-a) \\text{ is } f(a)',
        '\\text{Degree = highest power of variable}',
      ],
      examples: [
        { problem: '\\text{Factor: } x^2 + 5x + 6', solution: '(x + 2)(x + 3)' },
        { problem: '\\text{Expand: } (x + 2)(x - 3)', solution: 'x^2 - x - 6' },
        { problem: '\\text{Find remainder: } x^3 + 2x^2 - x + 1 \\div (x - 1)', solution: '3' },
      ],
    },
  },
  'Calculus': {
    'Limits': {
      definition: 'A limit tells us what value a function approaches as the input gets close to a certain value. If lim(x→a) f(x) = L, it means as x gets closer to a, f(x) gets closer to L. Limits form the foundation of calculus.',
      formulas: [
        '\\lim_{x \\to a} f(x) = L',
        '\\lim_{x \\to a^-} f(x) \\text{ (Left-hand limit)}',
        '\\lim_{x \\to a^+} f(x) \\text{ (Right-hand limit)}',
        '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\text{ (Important identity)}',
      ],
      examples: [
        { problem: '\\lim_{x \\to 2} (3x + 1)', solution: '7' },
        { problem: '\\lim_{x \\to 0} \\frac{\\sin x}{x}', solution: '1' },
        { problem: '\\lim_{x \\to \\infty} \\frac{1}{x}', solution: '0' },
      ],
    },
    'Derivatives': {
      definition: 'A derivative represents the instantaneous rate of change of a function — the slope of a curve at a point. It is defined as f\'(x) = lim(h→0) [f(x+h) - f(x)]/h. Derivatives are fundamental for optimization, physics, and engineering.',
      formulas: [
        '\\frac{d}{dx}[x^n] = nx^{n-1} \\text{ (Power Rule)}',
        '\\frac{d}{dx}[\\sin x] = \\cos x',
        '\\frac{d}{dx}[\\cos x] = -\\sin x',
        '\\frac{d}{dx}[e^x] = e^x',
        '\\frac{d}{dx}[\\ln x] = \\frac{1}{x}',
        '(fg)\' = f\'g + fg\' \\text{ (Product Rule)}',
        '\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2} \\text{ (Quotient Rule)}',
        '\\frac{d}{dx}f(g(x)) = f\'(g(x)) \\cdot g\'(x) \\text{ (Chain Rule)}',
      ],
      examples: [
        { problem: '\\frac{d}{dx}[x^3]', solution: '3x^2' },
        { problem: '\\frac{d}{dx}[2x^2 + 3x]', solution: '4x + 3' },
        { problem: '\\frac{d}{dx}[\\sin(x^2)]', solution: '2x\\cos(x^2)' },
      ],
    },
    'Basic Integration': {
      definition: 'Integration is the reverse process of differentiation. It finds the area under a curve or the antiderivative of a function. Indefinite integrals include a constant C, while definite integrals give numerical values.',
      formulas: [
        '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\text{ (Power Rule, } n \\neq -1\\text{)}',
        '\\int \\frac{1}{x} dx = \\ln|x| + C',
        '\\int e^x dx = e^x + C',
        '\\int \\sin x dx = -\\cos x + C',
        '\\int \\cos x dx = \\sin x + C',
        '\\int u \\, dv = uv - \\int v \\, du \\text{ (Integration by Parts)}',
      ],
      examples: [
        { problem: '\\int 3x^2 dx', solution: 'x^3 + C' },
        { problem: '\\int (2x + 1) dx', solution: 'x^2 + x + C' },
        { problem: '\\int_0^1 x^2 dx', solution: '\\frac{1}{3}' },
      ],
    },
  },
  'Geometry & Topology': {
    'Euclidean Geometry': {
      definition: 'Euclidean Geometry is the study of shapes, angles, and space based on Euclid\'s postulates. It deals with flat (2D) and solid (3D) spaces using points, lines, planes, angles, and figures. Key concepts include triangles, quadrilaterals, circles, and their properties.',
      formulas: [
        'a^2 + b^2 = c^2 \\text{ (Pythagorean Theorem)}',
        '\\text{Triangle angle sum} = 180°',
        '\\text{Quadrilateral angle sum} = 360°',
        '\\text{Circle circumference} = 2\\pi r',
        '\\text{Circle area} = \\pi r^2',
        '\\text{Triangle area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}',
      ],
      examples: [
        { problem: '\\text{Right triangle with legs 3, 4}', solution: '\\text{Hypotenuse} = 5' },
        { problem: '\\text{Circle with radius 7}', solution: '\\text{Area} = 49\\pi' },
        { problem: '\\text{Triangle with base 10, height 6}', solution: '\\text{Area} = 30' },
      ],
    },
    'Coordinate Geometry': {
      definition: 'Coordinate Geometry (Analytic Geometry) analyzes geometric figures using algebra and coordinates (x, y). It connects geometry with algebra, allowing us to study lines, circles, and conic sections using equations.',
      formulas: [
        '\\text{Distance} = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}',
        '\\text{Midpoint} = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)',
        '\\text{Slope} = \\frac{y_2-y_1}{x_2-x_1}',
        'y = mx + c \\text{ (Line equation)}',
        '(x-h)^2 + (y-k)^2 = r^2 \\text{ (Circle)}',
        '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\text{ (Ellipse)}',
      ],
      examples: [
        { problem: '\\text{Distance between (0,0) and (3,4)}', solution: '5' },
        { problem: '\\text{Midpoint of (1,2) and (5,8)}', solution: '(3,5)' },
        { problem: '\\text{Slope of line through (1,1) and (3,7)}', solution: '3' },
      ],
    },
    'Manifolds': {
      definition: 'A manifold is a space that locally looks Euclidean (flat) but globally may be curved. Examples include the surface of a sphere and torus. Manifolds are fundamental in topology, differential geometry, and physics (like 4D spacetime in relativity).',
      formulas: [
        '\\text{Locally Euclidean: each point has neighborhood} \\approx \\mathbb{R}^n',
        '\\text{Charts and atlases define manifold structure}',
        '\\text{Tangent space at each point}',
        '\\text{Differential forms and integration on manifolds}',
      ],
      examples: [
        { problem: '\\text{2-sphere } S^2', solution: '\\text{Surface of ball in } \\mathbb{R}^3' },
        { problem: '\\text{Torus}', solution: '\\text{Doughnut shape, topologically different from sphere}' },
        { problem: '\\text{Klein bottle}', solution: '\\text{Non-orientable 2-manifold}' },
      ],
    },
  },
  'Number Theory': {
    'Prime Numbers': {
      definition: 'A prime number is a natural number greater than 1 that has only two positive divisors: 1 and itself. Examples include 2, 3, 5, 7, 11, 13, 17, 19. Every number can be written as a product of prime numbers (Fundamental Theorem of Arithmetic).',
      formulas: [
        '\\text{Fundamental Theorem: Every } n > 1 \\text{ has unique prime factorization}',
        '\\text{Infinitely many primes (Euclid\'s theorem)}',
        '\\text{Prime counting function: } \\pi(x) \\approx \\frac{x}{\\ln x}',
        '\\text{Sieve of Eratosthenes for finding primes}',
      ],
      examples: [
        { problem: '\\text{First 5 primes}', solution: '2, 3, 5, 7, 11' },
        { problem: '\\text{Prime factorization of 12}', solution: '2^2 \\times 3' },
        { problem: '\\text{Is 17 prime?}', solution: '\\text{Yes, only divisors are 1 and 17}' },
      ],
    },
    'GCD & LCM': {
      definition: 'GCD (Greatest Common Divisor) is the largest positive integer that divides two numbers. LCM (Least Common Multiple) is the smallest positive integer divisible by both numbers. They are related by: LCM(a,b) × GCD(a,b) = a × b.',
      formulas: [
        '\\text{Euclidean Algorithm: } \\gcd(a,b) = \\gcd(b, a \\bmod b)',
        '\\text{LCM}(a,b) = \\frac{a \\times b}{\\gcd(a,b)}',
        '\\text{Bézout\'s Identity: } ax + by = \\gcd(a,b)',
        '\\text{Extended Euclidean Algorithm finds } x, y',
      ],
      examples: [
        { problem: '\\gcd(18, 24)', solution: '6' },
        { problem: '\\text{LCM}(12, 15)', solution: '60' },
        { problem: '\\gcd(48, 18) \\text{ using Euclidean algorithm}', solution: '6' },
      ],
    },
    'Modular Arithmetic': {
      definition: 'Modular arithmetic is arithmetic with remainders, often called "clock math." If a ≡ b (mod n), then (a - b) is divisible by n. This is fundamental in cryptography, computer science, and number theory.',
      formulas: [
        'a \\equiv b \\pmod{n} \\text{ means } n | (a - b)',
        '(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n',
        '(a \\times b) \\bmod n = ((a \\bmod n) \\times (b \\bmod n)) \\bmod n',
        '\\text{Fermat\'s Little Theorem: } a^{p-1} \\equiv 1 \\pmod{p} \\text{ for prime } p',
      ],
      examples: [
        { problem: '17 \\equiv ? \\pmod{12}', solution: '5' },
        { problem: '14 + 9 \\pmod{10}', solution: '3' },
        { problem: '7 \\times 8 \\pmod{5}', solution: '1' },
      ],
    },
  },
  'Statistics': {
    'Descriptive Statistics': {
      definition: 'Descriptive statistics summarize and describe the main features of a dataset. Central tendency measures (mean, median, mode) show the center, while measures of dispersion (range, variance, standard deviation) show the spread of data.',
      formulas: [
        '\\bar{x} = \\frac{\\sum x_i}{n} \\text{ (Mean)}',
        '\\text{Median = middle value when data is ordered}',
        '\\text{Mode = most frequently occurring value}',
        '\\text{Range} = \\text{Max} - \\text{Min}',
        's^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1} \\text{ (Sample Variance)}',
        's = \\sqrt{s^2} \\text{ (Standard Deviation)}',
      ],
      examples: [
        { problem: '\\text{Mean of } [2, 4, 6, 8, 10]', solution: '6' },
        { problem: '\\text{Median of } [1, 3, 5, 7, 9]', solution: '5' },
        { problem: '\\text{Standard deviation of } [1, 2, 3, 4, 5]', solution: '\\sqrt{2.5} \\approx 1.58' },
      ],
    },
    'Mean & Median': {
      definition: 'Mean is the arithmetic average of all values. Median is the middle value when data is arranged in order. Mean is affected by outliers, while median is more robust. Both are measures of central tendency.',
      formulas: [
        '\\text{Mean} = \\frac{\\sum_{i=1}^n x_i}{n}',
        '\\text{Median (odd n)} = x_{(n+1)/2}',
        '\\text{Median (even n)} = \\frac{x_{n/2} + x_{(n/2)+1}}{2}',
        '\\text{Weighted Mean} = \\frac{\\sum w_i x_i}{\\sum w_i}',
      ],
      examples: [
        { problem: '\\text{Mean of } [10, 20, 30]', solution: '20' },
        { problem: '\\text{Median of } [1, 3, 5, 7]', solution: '4' },
        { problem: '\\text{Effect of outlier: } [1, 2, 3, 100]', solution: '\\text{Mean} = 26.5, \\text{Median} = 2.5' },
      ],
    },
    'Probability': {
      definition: 'Probability measures the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain). It forms the foundation for statistical inference, hypothesis testing, and many real-world applications.',
      formulas: [
        'P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total outcomes}}',
        'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        'P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\text{ (Conditional Probability)}',
        'P(A \\cap B) = P(A) \\times P(B) \\text{ (Independent events)}',
        '\\text{Bayes\' Theorem: } P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}',
      ],
      examples: [
        { problem: '\\text{Probability of rolling 6 on dice}', solution: '\\frac{1}{6}' },
        { problem: '\\text{Probability of heads in fair coin}', solution: '0.5' },
        { problem: '\\text{Drawing red card from deck}', solution: '\\frac{26}{52} = \\frac{1}{2}' },
      ],
    },
  },
  'Linear Algebra': {
    'Matrix Operations': {
      definition: 'Matrix operations include addition, subtraction, multiplication, and finding determinants and inverses. Matrices are rectangular arrays of numbers used extensively in linear algebra, computer graphics, and data science.',
      formulas: [
        '(A + B)_{ij} = A_{ij} + B_{ij} \\text{ (Matrix Addition)}',
        '(AB)_{ij} = \\sum_k A_{ik} B_{kj} \\text{ (Matrix Multiplication)}',
        'A^T_{ij} = A_{ji} \\text{ (Transpose)}',
        '\\det(A) = \\sum_{\\sigma} \\text{sgn}(\\sigma) \\prod_{i=1}^n A_{i,\\sigma(i)}',
        'AA^{-1} = I \\text{ (Matrix Inverse)}',
      ],
      examples: [
        { problem: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}', solution: '\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}' },
        { problem: '\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}', solution: '-2' },
      ],
    },
    'Determinants': {
      definition: 'A determinant is a scalar value that tells if a matrix is invertible and helps solve systems of equations. For a 2×2 matrix, det(A) = ad - bc. Determinants have important geometric interpretations including area and volume scaling.',
      formulas: [
        '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc \\text{ (2×2)}',
        '\\det(AB) = \\det(A) \\det(B)',
        '\\det(A^T) = \\det(A)',
        '\\det(A^{-1}) = \\frac{1}{\\det(A)}',
      ],
      examples: [
        { problem: '\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}', solution: '8 - 3 = 5' },
        { problem: '\\det\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}', solution: '1' },
        { problem: '\\text{Is } \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix} \\text{ invertible?}', solution: '\\text{No, det = 0}' },
      ],
    },
    'Matrix Inverse': {
      definition: 'Matrix A⁻¹ such that A·A⁻¹ = I. Only square matrices with non-zero determinant have inverses. The inverse is crucial for solving systems of linear equations and transformations.',
      formulas: [
        'A \\cdot A^{-1} = I',
        'A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) \\text{ (Adjugate method)}',
        '\\text{For 2×2: } \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
      ],
      examples: [
        { problem: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}^{-1}', solution: '\\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}' },
        { problem: '\\text{Solve } AX = B \\text{ for } X', solution: 'X = A^{-1}B' },
      ],
    },
    'Eigenvalues': {
      definition: 'For a square matrix A, if Av = λv for some non-zero vector v, then λ is an eigenvalue and v is the corresponding eigenvector. They describe scaling behavior of linear transformations and are fundamental in many applications.',
      formulas: [
        'Av = \\lambda v \\text{ (Eigenvalue equation)}',
        '\\det(A - \\lambda I) = 0 \\text{ (Characteristic equation)}',
        '\\text{Eigenspace: } \\ker(A - \\lambda I)',
        '\\text{Trace}(A) = \\sum \\lambda_i',
      ],
      examples: [
        { problem: '\\text{Find eigenvalues of } \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}', solution: '\\lambda = 2, 3' },
        { problem: '\\text{Identity matrix eigenvalues}', solution: '\\text{All eigenvalues are 1}' },
      ],
    },
  },
  'Discrete Math': {
    'Graph Theory': {
      definition: 'A graph G=(V,E) consists of vertices (V) and edges (E) connecting them. Graph theory studies relationships and connections, with applications in computer science, networks, and optimization.',
      formulas: [
        '\\text{Handshaking Lemma: } \\sum \\deg(v) = 2|E|',
        '\\text{Euler\'s Formula: } V - E + F = 2 \\text{ (planar graphs)}',
        '\\text{Complete graph: } K_n \\text{ has } \\binom{n}{2} \\text{ edges}',
        '\\text{Tree: } |E| = |V| - 1',
      ],
      examples: [
        { problem: '\\text{Degree sum in graph with 5 edges}', solution: '\\text{Sum of degrees = 10}' },
        { problem: '\\text{Complete graph } K_4 \\text{ edges}', solution: '\\binom{4}{2} = 6' },
        { problem: '\\text{Tree with 7 vertices has how many edges?}', solution: '6' },
      ],
    },
    'Combinatorics': {
      definition: 'Study of counting, arrangements, and combinations. Includes permutations (ordered arrangements) and combinations (unordered selections). Essential for probability, algorithm analysis, and discrete mathematics.',
      formulas: [
        'P(n,r) = \\frac{n!}{(n-r)!} \\text{ (Permutations)}',
        'C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!} \\text{ (Combinations)}',
        '\\text{Pigeonhole Principle: } n+1 \\text{ objects in } n \\text{ boxes}',
        '\\text{Inclusion-Exclusion: } |A \\cup B| = |A| + |B| - |A \\cap B|',
      ],
      examples: [
        { problem: '\\text{Arrange 5 books in order}', solution: '5! = 120' },
        { problem: '\\text{Choose 3 from 7 people}', solution: '\\binom{7}{3} = 35' },
        { problem: '\\text{License plates: 2 letters, 3 digits}', solution: '26^2 \\times 10^3 = 676,000' },
      ],
    },
  },
  'Differential Equations': {
    'ODEs': {
      definition: 'Ordinary Differential Equations involve derivatives of functions of one variable. They describe rates of change and are fundamental in physics, engineering, biology, and economics.',
      formulas: [
        '\\frac{dy}{dx} + P(x)y = Q(x) \\text{ (First-order linear)}',
        'y\' + py + qy = 0 \\text{ (Second-order homogeneous)}',
        'y = Ce^{kx} \\text{ (Solution to } y\' = ky\\text{)}',
        '\\text{Integrating factor: } \\mu(x) = e^{\\int P(x)dx}',
      ],
      examples: [
        { problem: '\\frac{dy}{dx} = ky', solution: 'y = Ce^{kx}' },
        { problem: '\\frac{dy}{dx} = y \\text{ with } y(0) = 1', solution: 'y = e^x' },
        { problem: '\\text{Population growth model}', solution: '\\frac{dP}{dt} = rP' },
      ],
    },
    'PDEs': {
      definition: 'Partial Differential Equations involve partial derivatives of functions with multiple variables. They model phenomena like heat flow, wave propagation, and fluid dynamics.',
      formulas: [
        '\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2} \\text{ (Heat equation)}',
        '\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2} \\text{ (Wave equation)}',
        '\\nabla^2 u = 0 \\text{ (Laplace\'s equation)}',
        '\\frac{\\partial u}{\\partial t} + u \\frac{\\partial u}{\\partial x} = 0 \\text{ (Transport equation)}',
      ],
      examples: [
        { problem: '\\text{Heat diffusion in rod}', solution: '\\frac{\\partial u}{\\partial t} = k \\frac{\\partial^2 u}{\\partial x^2}' },
        { problem: '\\text{Vibrating string}', solution: '\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}' },
        { problem: '\\text{Steady-state temperature}', solution: '\\nabla^2 u = 0' },
      ],
    },
  },
  'Emerging Fields': {
    'Machine Learning Math': {
      definition: 'Mathematical foundations of machine learning including linear algebra (vectors, matrices, eigenvalues), calculus (derivatives, gradients), probability and statistics (distributions, likelihood), and optimization (convex functions, constraints).',
      formulas: [
        '\\text{Gradient Descent: } \\theta_{t+1} = \\theta_t - \\alpha \\nabla J(\\theta_t)',
        '\\text{MSE Loss: } J = \\frac{1}{2m} \\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})^2',
        '\\text{Sigmoid: } \\sigma(z) = \\frac{1}{1 + e^{-z}}',
        '\\text{Backpropagation: } \\frac{\\partial J}{\\partial w} = \\frac{\\partial J}{\\partial a} \\frac{\\partial a}{\\partial z} \\frac{\\partial z}{\\partial w}',
      ],
      examples: [
        { problem: '\\text{Linear regression gradient}', solution: '\\frac{\\partial J}{\\partial \\theta_j} = \\frac{1}{m} \\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})x_j^{(i)}' },
        { problem: '\\text{Logistic regression}', solution: 'h_\\theta(x) = \\frac{1}{1 + e^{-\\theta^T x}}' },
        { problem: '\\text{Neural network forward pass}', solution: 'a^{[l]} = g(W^{[l]}a^{[l-1]} + b^{[l]})' },
      ],
    },
    'Information Theory': {
      definition: 'Study of quantification, storage, and communication of information. Core concepts include entropy (measure of uncertainty), mutual information (shared information between variables), and coding theory (efficient, error-correcting codes).',
      formulas: [
        'H(X) = -\\sum p(x) \\log p(x) \\text{ (Entropy)}',
        'I(X;Y) = H(X) - H(X|Y) \\text{ (Mutual Information)}',
        'C = \\max_{p(x)} I(X;Y) \\text{ (Channel Capacity)}',
        'H(X,Y) = H(X) + H(Y|X) \\text{ (Joint Entropy)}',
      ],
      examples: [
        { problem: '\\text{Fair coin entropy}', solution: 'H = -2 \\cdot \\frac{1}{2} \\log_2 \\frac{1}{2} = 1 \\text{ bit}' },
        { problem: '\\text{Binary channel capacity}', solution: 'C = 1 - H(p) \\text{ bits per use}' },
        { problem: '\\text{Huffman coding efficiency}', solution: '\\text{Average length} \\approx H(X)' },
      ],
    },
  },
  'Abstract Algebra': {
    'Group Theory': {
      definition: 'Group theory studies algebraic structures known as groups, which consist of a set equipped with an operation that combines any two elements to form a third element. A group (G, ∘) must satisfy closure, associativity, identity, and inverse properties.',
      formulas: [
        '(G, \\circ) \\text{ is a group if: closure, associativity, identity, inverse}',
        '|G| = \\text{order of group G}',
        '\\text{Lagrange: } |H| \\text{ divides } |G| \\text{ for subgroup H}',
        '\\text{Cayley\'s Theorem: Every group is isomorphic to a permutation group}',
      ],
      examples: [
        { problem: '\\text{Show } (\\mathbb{Z}, +) \\text{ is a group}', solution: '\\text{Satisfies all group axioms}' },
        { problem: '\\text{Order of } \\mathbb{Z}_5', solution: '5' },
        { problem: '\\text{Subgroups of } \\mathbb{Z}_6', solution: '\\{0\\}, \\{0,2,4\\}, \\{0,3\\}, \\mathbb{Z}_6' },
      ],
    },
    'Ring Theory': {
      definition: 'A ring is an algebraic structure consisting of a set equipped with two binary operations: addition (forming an abelian group) and multiplication (forming a semigroup), connected by distributive laws. Examples include integers, polynomials, and matrices.',
      formulas: [
        '(R, +, \\cdot) \\text{ with } (R, +) \\text{ abelian group and distributive laws}',
        '\\text{Commutative ring: } ab = ba',
        '\\text{Ring with unity: contains multiplicative identity 1}',
        '\\text{Integral domain: commutative ring with unity and no zero divisors}',
      ],
      examples: [
        { problem: '\\text{Show } \\mathbb{Z} \\text{ is a ring}', solution: '\\text{Addition forms group, multiplication associative, distributive}' },
        { problem: '\\text{Units in } \\mathbb{Z}_6', solution: '\\{1, 5\\}' },
        { problem: '\\text{Zero divisors in } \\mathbb{Z}_6', solution: '\\{2, 3, 4\\}' },
      ],
    },
    'Field Theory': {
      definition: 'A field is a ring where every nonzero element has a multiplicative inverse, and both addition and multiplication are commutative. Fields include rational, real, complex numbers, and finite fields. Field extensions study larger fields containing smaller ones.',
      formulas: [
        '(F, +, \\cdot) \\text{ where } (F\\setminus\\{0\\}, \\cdot) \\text{ is abelian group}',
        '[F:K] = \\text{degree of field extension } F/K',
        '\\text{Minimal polynomial: monic irreducible polynomial of element}',
        '\\text{Finite field: } |\\mathbb{F}_{p^n}| = p^n',
      ],
      examples: [
        { problem: '\\text{Show } \\mathbb{Q}(\\sqrt{2}) \\text{ is a field}', solution: '\\text{Every nonzero element has inverse}' },
        { problem: '[\\mathbb{Q}(\\sqrt{2}) : \\mathbb{Q}]', solution: '2' },
        { problem: '\\text{Minimal polynomial of } \\sqrt{2} \\text{ over } \\mathbb{Q}', solution: 'x^2 - 2' },
      ],
    },
    'Module Theory': {
      definition: 'Module theory generalizes vector spaces by allowing scalars to come from a ring instead of a field. A module is an abelian group with a ring action satisfying distributive and associative properties. Modules are to rings what vector spaces are to fields.',
      formulas: [
        'M \\text{ is } R\\text{-module with action } R \\times M \\to M',
        'r(m + n) = rm + rn \\text{ and } (r + s)m = rm + sm',
        '\\text{Free module: has basis like vector space}',
        '\\text{Torsion element: } rm = 0 \\text{ for some nonzero } r',
      ],
      examples: [
        { problem: '\\text{Show } \\mathbb{Z}_n \\text{ is } \\mathbb{Z}\\text{-module}', solution: '\\text{Satisfies module axioms}' },
        { problem: '\\text{Classify } \\mathbb{Z}\\text{-modules of order 12}', solution: '\\mathbb{Z}_{12}, \\mathbb{Z}_4 \\oplus \\mathbb{Z}_3, \\mathbb{Z}_2 \\oplus \\mathbb{Z}_6, \\mathbb{Z}_2^2 \\oplus \\mathbb{Z}_3' },
      ],
    },
    'Galois Theory': {
      definition: 'Galois Theory connects field extensions with group theory through automorphism groups. It determines solvability of polynomials by radicals and establishes correspondence between intermediate fields and subgroups of the Galois group.',
      formulas: [
        '\\text{Gal}(E/F) = \\{\\sigma: E \\to E \\mid \\sigma \\text{ fixes } F\\}',
        '\\text{Fundamental Theorem: bijection between intermediate fields and subgroups}',
        '\\text{Solvable by radicals } \\Leftrightarrow \\text{ solvable Galois group}',
        '|\\text{Gal}(E/F)| = [E:F] \\text{ for Galois extensions}',
      ],
      examples: [
        { problem: '\\text{Gal}(\\mathbb{Q}(\\sqrt{2})/\\mathbb{Q})', solution: '\\mathbb{Z}_2' },
        { problem: '\\text{Gal}(\\mathbb{Q}(\\sqrt[3]{2}, \\omega)/\\mathbb{Q})', solution: 'S_3' },
        { problem: '\\text{Is } x^5 - x - 1 \\text{ solvable by radicals?}', solution: '\\text{No, Galois group is } S_5' },
      ],
    },
    'Category Theory': {
      definition: 'Category theory studies mathematical structures and relationships between them abstractly. A category consists of objects and morphisms (arrows) with composition and identity. It provides a unifying framework connecting all areas of mathematics.',
      formulas: [
        '\\text{Category: objects + morphisms + composition + identities}',
        '\\text{Functor: structure-preserving map between categories}',
        '\\text{Natural transformation: systematic way to transform functors}',
        '\\text{Yoneda Lemma: objects determined by morphisms to them}',
      ],
      examples: [
        { problem: '\\text{Category } \\mathbf{Set}', solution: '\\text{Objects: sets, Morphisms: functions}' },
        { problem: '\\text{Functor } F: \\mathbf{Grp} \\to \\mathbf{Set}', solution: '\\text{Forgetful functor (groups to underlying sets)}' },
        { problem: '\\text{Product in category}', solution: '\\text{Universal object with projections}' },
      ],
    },
  },
  'Real & Complex Analysis': {
    'Metric Spaces': {
      definition: 'A metric space is a set equipped with a metric (distance function) that defines the distance between any two points in the set. Metric spaces generalize our notion of distance and form the foundation for topology and analysis.',
      formulas: [
        'd(x,y) = d(y,x) \\text{ (Symmetry)}',
        'd(x,z) \\leq d(x,y) + d(y,z) \\text{ (Triangle Inequality)}',
        'd(x,y) = 0 \\iff x = y \\text{ (Identity)}',
        'd(x,y) \\geq 0 \\text{ (Non-negativity)}',
      ],
      examples: [
        { problem: '\\text{Euclidean metric: } d(x,y) = \\sqrt{\\sum(x_i-y_i)^2}', solution: '\\text{Standard distance formula}' },
        { problem: '\\text{Manhattan metric: } d(x,y) = \\sum|x_i - y_i|', solution: '\\text{Taxicab distance}' },
        { problem: '\\text{Discrete metric}', solution: 'd(x,y) = 0 \\text{ if } x = y, \\text{ else } 1' },
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
