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
    icon: '🔢',
    subtopics: [
      'Basic Operations',
      'Fractions & Decimals',
      'Percentages',
      'Order of Operations',
      'Prime Numbers',
      'Factorization'
    ]
  },
  {
    id: 'algebra',
    name: 'Algebra',
    icon: '📐',
    subtopics: [
      'Linear Equations',
      'Quadratic Equations',
      'Polynomials',
      'Systems of Equations',
      'Inequalities',
      'Functions'
    ]
  },
  {
    id: 'geometry',
    name: 'Geometry',
    icon: '📏',
    subtopics: [
      'Basic Shapes',
      'Area & Perimeter',
      'Volume & Surface Area',
      'Angles',
      'Triangles',
      'Circles'
    ]
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    icon: '📊',
    subtopics: [
      'Basic Ratios',
      'Unit Circle',
      'Trigonometric Functions',
      'Identities',
      'Law of Sines',
      'Law of Cosines'
    ]
  },
  {
    id: 'calculus',
    name: 'Calculus',
    icon: '∫',
    subtopics: [
      'Limits',
      'Derivatives',
      'Integration',
      'Chain Rule',
      'Product Rule',
      'Fundamental Theorem'
    ]
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: '📈',
    subtopics: [
      'Mean & Median',
      'Standard Deviation',
      'Probability',
      'Distributions',
      'Hypothesis Testing',
      'Correlation'
    ]
  },
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    icon: '🔲',
    subtopics: [
      'Vectors',
      'Matrices',
      'Determinants',
      'Eigenvalues',
      'Linear Transformations',
      'Vector Spaces'
    ]
  },
  {
    id: 'discrete-math',
    name: 'Discrete Math',
    icon: '🔗',
    subtopics: [
      'Set Theory',
      'Logic',
      'Combinatorics',
      'Graph Theory',
      'Number Theory',
      'Algorithms'
    ]
  },
  {
    id: 'real-complex-analysis',
    name: 'Real & Complex Analysis',
    icon: '🌊',
    subtopics: [
      'Metric Spaces',
      'Uniform Convergence',
      'Analytic Continuation',
      'Cauchy Sequences',
      'Residue Theorem'
    ]
  },
  {
    id: 'topology',
    name: 'Topology',
    icon: '🕳️',
    subtopics: [
      'Open/Closed Sets',
      'Compactness & Connectedness',
      'Homeomorphism',
      'Homotopy Theory',
      'Fundamental Group'
    ]
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
      'Lie Groups'
    ]
  },
  {
    id: 'measure-theory',
    name: 'Measure Theory & Integration',
    icon: '📏',
    subtopics: [
      'Lebesgue Integral',
      'Sigma-algebras',
      'Measurable Functions',
      'Fubini\'s Theorem'
    ]
  },
  {
    id: 'functional-analysis',
    name: 'Functional Analysis',
    icon: '🔄',
    subtopics: [
      'Normed Spaces',
      'Banach & Hilbert Spaces',
      'Linear Operators',
      'Spectral Theory'
    ]
  }
];

const topicContentDatabase: Record<string, Record<string, TopicContent>> = {
  'Arithmetic': {
    'Basic Operations': {
      definition: 'The fundamental operations of arithmetic include addition, subtraction, multiplication, and division. These operations form the foundation of all mathematical calculations and follow specific properties like commutativity and associativity.',
      formulas: [
        'a + b = b + a \\text{ (Commutative Property)}',
        '(a + b) + c = a + (b + c) \\text{ (Associative Property)}',
        'a \\times b = b \\times a \\text{ (Commutative Property)}',
        'a \\times (b + c) = a \\times b + a \\times c \\text{ (Distributive Property)}'
      ],
      examples: [
        { problem: '15 + 23', solution: '38' },
        { problem: '45 - 17', solution: '28' },
        { problem: '12 \\times 8', solution: '96' },
        { problem: '144 \\div 12', solution: '12' }
      ]
    },
    'Fractions & Decimals': {
      definition: 'Fractions represent parts of a whole, written as a/b where a is the numerator and b is the denominator. Decimals are another way to express fractions using place value notation.',
      formulas: [
        '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}',
        '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}',
        '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
        '\\text{Decimal to fraction: } 0.25 = \\frac{25}{100} = \\frac{1}{4}'
      ],
      examples: [
        { problem: '\\frac{1}{2} + \\frac{1}{3}', solution: '\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}' },
        { problem: '\\frac{2}{3} \\times \\frac{3}{4}', solution: '\\frac{6}{12} = \\frac{1}{2}' },
        { problem: '0.75 \\text{ as a fraction}', solution: '\\frac{3}{4}' }
      ]
    }
  },
  'Algebra': {
    'Linear Equations': {
      definition: 'A linear equation is an equation where the highest power of the variable is 1. It represents a straight line when graphed and has the general form ax + b = c.',
      formulas: [
        'ax + b = c',
        'x = \\frac{c - b}{a} \\text{ (Solution)}',
        'y = mx + b \\text{ (Slope-intercept form)}',
        'Ax + By = C \\text{ (Standard form)}'
      ],
      examples: [
        { problem: '2x + 5 = 13', solution: 'x = 4' },
        { problem: '3x - 7 = 2x + 1', solution: 'x = 8' },
        { problem: '\\frac{x}{2} + 3 = 7', solution: 'x = 8' }
      ]
    },
    'Quadratic Equations': {
      definition: 'A quadratic equation is a polynomial equation of degree 2, typically written as ax² + bx + c = 0. It can be solved using factoring, completing the square, or the quadratic formula.',
      formulas: [
        'ax^2 + bx + c = 0',
        'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\text{ (Quadratic Formula)}',
        '\\text{Discriminant: } \\Delta = b^2 - 4ac',
        '(x - h)^2 = k \\text{ (Vertex form)}'
      ],
      examples: [
        { problem: 'x^2 - 5x + 6 = 0', solution: 'x = 2 \\text{ or } x = 3' },
        { problem: '2x^2 + 3x - 2 = 0', solution: 'x = \\frac{1}{2} \\text{ or } x = -2' },
        { problem: 'x^2 - 4x + 4 = 0', solution: 'x = 2 \\text{ (double root)}' }
      ]
    }
  },
  'Geometry': {
    'Basic Shapes': {
      definition: 'Basic geometric shapes include triangles, squares, rectangles, circles, and polygons. Each shape has specific properties regarding sides, angles, and symmetry.',
      formulas: [
        '\\text{Triangle: } 3 \\text{ sides, angles sum to } 180°',
        '\\text{Square: } 4 \\text{ equal sides, } 4 \\text{ right angles}',
        '\\text{Rectangle: } 4 \\text{ sides, opposite sides equal}',
        '\\text{Circle: defined by radius } r \\text{ from center}'
      ],
      examples: [
        { problem: '\\text{Angles in a triangle: } 60°, 70°, ?', solution: '50°' },
        { problem: '\\text{Perimeter of square with side 5}', solution: '20' },
        { problem: '\\text{Area of rectangle 4×6}', solution: '24' }
      ]
    }
  },
  'Calculus': {
    'Derivatives': {
      definition: 'The derivative of a function measures the rate of change or slope at any point. It represents the instantaneous rate of change and is fundamental to calculus.',
      formulas: [
        'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
        '\\frac{d}{dx}[x^n] = nx^{n-1} \\text{ (Power Rule)}',
        '\\frac{d}{dx}[f(x) + g(x)] = f\'(x) + g\'(x) \\text{ (Sum Rule)}',
        '\\frac{d}{dx}[f(x)g(x)] = f\'(x)g(x) + f(x)g\'(x) \\text{ (Product Rule)}'
      ],
      examples: [
        { problem: '\\frac{d}{dx}[x^3]', solution: '3x^2' },
        { problem: '\\frac{d}{dx}[2x^2 + 3x - 1]', solution: '4x + 3' },
        { problem: '\\frac{d}{dx}[\\sin(x)]', solution: '\\cos(x)' }
      ]
    }
  },
  'Real & Complex Analysis': {
    'Metric Spaces': {
      definition: 'A metric space is a set equipped with a distance function (metric) that satisfies non-negativity, identity of indiscernibles, symmetry, and triangle inequality. Metric spaces provide the foundation for topology and analysis by defining how to measure distance between points.',
      formulas: [
        'd(x,y) \\geq 0 \\text{ (Non-negativity)}',
        'd(x,y) = 0 \\iff x = y \\text{ (Identity of indiscernibles)}',
        'd(x,y) = d(y,x) \\text{ (Symmetry)}',
        'd(x,z) \\leq d(x,y) + d(y,z) \\text{ (Triangle inequality)}',
        'd_{\\text{Euclidean}}(x,y) = \\sqrt{\\sum(x_i-y_i)^2}',
        'd_{\\text{Manhattan}}(x,y) = \\sum|x_i - y_i|',
        'd_{\\text{discrete}}(x,y) = \\begin{cases} 0 & \\text{if } x = y \\\\ 1 & \\text{if } x \\neq y \\end{cases}',
      ],
      examples: [
        { problem: '\\text{Euclidean distance between } (0,0) \\text{ and } (3,4)', solution: 'd = \\sqrt{3^2 + 4^2} = 5' },
        { problem: '\\text{Manhattan distance between } (1,2) \\text{ and } (4,6)', solution: 'd = |4-1| + |6-2| = 3 + 4 = 7' },
        { problem: '\\text{Verify triangle inequality for } d(0,2) \\leq d(0,1) + d(1,2)', solution: '2 \\leq 1 + 1 = 2 \\text{ (equality holds)}' },
      ],
    },
    'Uniform Convergence': {
      definition: 'Uniform convergence means a sequence of functions converges at the same rate for all points in the domain. Unlike pointwise convergence, uniform convergence preserves continuity, integrability, and other important properties. It uses the supremum metric to ensure convergence happens uniformly across the entire domain.',
      formulas: [
        '\\text{Pointwise: } \\forall x \\in X, \\lim_{n \\to \\infty} f_n(x) = f(x)',
        '\\text{Uniform: } \\forall \\varepsilon > 0, \\exists N : n \\geq N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon \\text{ for all } x',
        'd(f_n, f) = \\sup_{x \\in X} |f_n(x) - f(x)| \\text{ (Supremum metric)}',
        '\\text{Uniform limit of continuous functions is continuous}',
        '\\int_a^b f_n(x) dx \\to \\int_a^b f(x) dx \\text{ (uniform convergence)}',
      ],
      examples: [
        { problem: '\\text{Does } f_n(x) = x^n \\text{ converge uniformly on } [0,1]?', solution: '\\text{No, } \\sup_{x \\in [0,1]} |x^n - 0| = 1 \\text{ for all } n' },
        { problem: '\\text{Does } f_n(x) = \\frac{x}{n} \\text{ converge uniformly on } [0,1]?', solution: '\\text{Yes, } \\sup_{x \\in [0,1]} |\\frac{x}{n} - 0| = \\frac{1}{n} \\to 0' },
        { problem: '\\text{Check uniform convergence of } f_n(x) = \\frac{x}{n+x} \\text{ on } [0,1]', solution: '\\sup |f_n(x)| = \\frac{1}{n+1} \\to 0 \\text{ (uniform)}' },
      ],
    },
    'Analytic Continuation': {
      definition: 'Analytic continuation extends the domain of an analytic function beyond its original domain while preserving analyticity. It connects local power series expansions into a global analytic function, enabling functions like the Riemann zeta function to be defined on larger domains.',
      formulas: [
        'f(z) = \\sum_{n=0}^\\infty a_n (z-z_0)^n \\text{ (Power series)}',
        '\\text{Uniqueness: If two analytic functions agree on an open set, their continuation is unique}',
        '\\zeta(s) = \\sum_{n=1}^\\infty \\frac{1}{n^s} \\text{ for } \\Re(s) > 1',
        '\\text{Extended } \\zeta(s) \\text{ to } \\mathbb{C} \\setminus \\{1\\} \\text{ by continuation}',
      ],
      examples: [
        { problem: '\\text{Analytic continuation of } \\sum_{n=0}^\\infty z^n', solution: '\\frac{1}{1-z} \\text{ for } |z| < 1, \\text{ continued to } \\mathbb{C} \\setminus \\{1\\}' },
        { problem: '\\text{Natural boundary example}', solution: '\\sum_{n=0}^\\infty z^{2^n} \\text{ has natural boundary } |z| = 1' },
        { problem: '\\text{Gamma function continuation}', solution: '\\Gamma(z) \\text{ extends factorial to complex plane}' },
      ],
    },
    'Cauchy Sequences': {
      definition: 'A Cauchy sequence is one whose elements become arbitrarily close to each other as the sequence progresses, regardless of convergence to a specific limit. Cauchy sequences define completeness of metric spaces and provide a way to construct real numbers from rationals.',
      formulas: [
        '\\forall \\varepsilon > 0, \\exists N : m,n \\geq N \\Rightarrow d(x_n, x_m) < \\varepsilon',
        '\\text{In complete spaces: Cauchy} \\iff \\text{Convergent}',
        '\\text{Cauchy Criterion: sequence converges} \\iff \\text{it is Cauchy}',
        '\\text{Every convergent sequence is Cauchy}',
      ],
      examples: [
        { problem: '\\text{Is } x_n = \\frac{1}{n} \\text{ Cauchy?}', solution: '|x_n - x_m| = |\\frac{1}{n} - \\frac{1}{m}| \\to 0 \\text{ (Cauchy)}' },
        { problem: '\\text{Cauchy in } \\mathbb{Q} \\text{ but not convergent}', solution: '\\text{Decimal approximations of } \\sqrt{2}' },
        { problem: '\\text{Is } x_n = (-1)^n \\text{ Cauchy?}', solution: '|x_n - x_m| = 2 \\text{ for } n,m \\text{ of different parity (not Cauchy)}' },
      ],
    },
    'Residue Theorem': {
      definition: 'The Residue Theorem evaluates complex line integrals around closed curves by examining singularities inside the contour. It states that the integral equals 2πi times the sum of residues at singularities, providing a powerful tool for complex integration and real integral evaluation.',
      formulas: [
        '\\oint_C f(z) dz = 2\\pi i \\sum_{k=1}^n \\text{Res}(f, z_k)',
        '\\text{Simple pole: } \\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z-z_0)f(z)',
        '\\text{Pole of order } n: \\text{Res}(f, z_0) = \\frac{1}{(n-1)!} \\lim_{z \\to z_0} \\frac{d^{n-1}}{dz^{n-1}}[(z-z_0)^n f(z)]',
        'f(z) = \\cdots + \\frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \\cdots',
      ],
      examples: [
        { problem: '\\oint_{|z|=2} \\frac{1}{z^2+1} dz', solution: '\\text{Pole at } z=i, \\text{Res} = \\frac{1}{2i}, \\text{Result} = \\pi' },
        { problem: '\\int_{-\\infty}^\\infty \\frac{dx}{x^2+1}', solution: '\\text{Use semicircular contour, result} = \\pi' },
        { problem: '\\text{Residue of } \\frac{1}{(z-1)^2}', solution: '\\text{Res}(f,1) = \\lim_{z \\to 1} \\frac{d}{dz}[(z-1)^2 \\cdot \\frac{1}{(z-1)^2}] = 0' },
      ],
    },
  },
  'Topology': {
    'Open/Closed Sets': {
      definition: 'In topology, open sets are the fundamental building blocks that define the topological structure. A topological space consists of a set with a collection of open sets satisfying closure under arbitrary unions and finite intersections. Closed sets are complements of open sets.',
      formulas: [
        '\\text{Open set } U: \\forall x \\in U, \\exists \\varepsilon > 0 : B(x,\\varepsilon) \\subseteq U',
        '\\text{Closed set } A: X \\setminus A \\text{ is open}',
        '\\text{Topology } \\tau: \\emptyset, X \\in \\tau \\text{ and closed under unions, finite intersections}',
        'B(x,\\varepsilon) = \\{y \\in X : d(x,y) < \\varepsilon\\} \\text{ (Open ball)}',
      ],
      examples: [
        { problem: '\\text{Is } (0,1) \\text{ open in } \\mathbb{R}?', solution: '\\text{Yes, every point has a neighborhood contained in } (0,1)' },
        { problem: '\\text{Is } [0,1] \\text{ closed in } \\mathbb{R}?', solution: '\\text{Yes, its complement } (-\\infty,0) \\cup (1,\\infty) \\text{ is open}' },
        { problem: '\\text{Example of clopen set}', solution: '\\emptyset \\text{ and } \\mathbb{R} \\text{ are both open and closed}' },
      ],
    },
    'Compactness & Connectedness': {
      definition: 'Compactness means every open cover has a finite subcover - a topological notion of "boundedness." In ℝⁿ, compact means closed and bounded (Heine-Borel). Connectedness means the space cannot be separated into two disjoint non-empty open sets.',
      formulas: [
        '\\text{Compact: every open cover has finite subcover}',
        '\\text{Heine-Borel: compact in } \\mathbb{R}^n \\iff \\text{ closed and bounded}',
        '\\text{Connected: no separation into disjoint non-empty open sets}',
        '\\text{Path-connected} \\Rightarrow \\text{Connected}',
      ],
      examples: [
        { problem: '\\text{Is } [0,1] \\text{ compact?}', solution: '\\text{Yes, closed and bounded in } \\mathbb{R}' },
        { problem: '\\text{Is } (0,1) \\cup (2,3) \\text{ connected?}', solution: '\\text{No, can be separated into two open parts}' },
        { problem: '\\text{Is } \\mathbb{R} \\text{ connected?}', solution: '\\text{Yes, cannot be written as union of two disjoint non-empty open sets}' },
      ],
    },
    'Homeomorphism': {
      definition: 'A homeomorphism is a continuous bijection with continuous inverse, establishing topological equivalence. Homeomorphic spaces have the same topological properties - they are essentially the same from a topological viewpoint, even if geometrically different.',
      formulas: [
        'f: X \\to Y \\text{ homeomorphism if bijective, continuous, and } f^{-1} \\text{ continuous}',
        '\\text{Homeomorphic spaces have same topological properties}',
        '\\text{Preserved: connectedness, compactness, continuity}',
      ],
      examples: [
        { problem: '\\text{Are } (0,1) \\text{ and } \\mathbb{R} \\text{ homeomorphic?}', solution: '\\text{Yes, } f(x) = \\tan(\\pi(x - \\frac{1}{2})) \\text{ is a homeomorphism}' },
        { problem: '\\text{Coffee mug and donut}', solution: '\\text{Homeomorphic - both have one hole}' },
        { problem: '\\text{Circle and square boundary}', solution: '\\text{Homeomorphic - both are simple closed curves}' },
      ],
    },
    'Homotopy Theory': {
      definition: 'Homotopy theory studies continuous deformations between functions and spaces. Two functions are homotopic if one can be continuously deformed into the other. Homotopy equivalence is weaker than homeomorphism but captures essential topological features.',
      formulas: [
        'f \\simeq g \\text{ if } \\exists H: X \\times [0,1] \\to Y : H(x,0) = f(x), H(x,1) = g(x)',
        '\\text{Homotopy equivalence: } f: X \\to Y, g: Y \\to X : g \\circ f \\simeq \\text{id}_X, f \\circ g \\simeq \\text{id}_Y',
        '\\text{Contractible space: homotopy equivalent to a point}',
      ],
      examples: [
        { problem: '\\text{Are all maps } S^1 \\to \\mathbb{R}^2 \\setminus \\{0\\} \\text{ homotopic?}', solution: '\\text{No, maps can have different winding numbers}' },
        { problem: '\\text{Disk and point}', solution: '\\text{Homotopy equivalent - disk contracts to center}' },
        { problem: '\\text{Punctured plane and circle}', solution: '\\text{Homotopy equivalent - } \\mathbb{R}^2 \\setminus \\{0\\} \\simeq S^1' },
      ],
    },
    'Fundamental Group': {
      definition: 'The fundamental group π₁(X,x₀) measures the number of holes in a space via loops. It consists of homotopy classes of loops based at a point x₀, with group operation given by loop concatenation. It is the first homotopy group and a fundamental topological invariant.',
      formulas: [
        '\\pi_1(X,x_0) = \\{\\text{homotopy classes of loops at } x_0\\}',
        '\\text{Group operation: loop concatenation}',
        '\\pi_1(\\mathbb{R}^n) = \\{e\\} \\text{ (trivial)}',
        '\\pi_1(S^1) = \\mathbb{Z} \\text{ (winding numbers)}',
        '\\pi_1(T^2) = \\mathbb{Z} \\times \\mathbb{Z} \\text{ (torus)}',
      ],
      examples: [
        { problem: '\\pi_1(S^1)', solution: '\\mathbb{Z} \\text{ - loops classified by winding number}' },
        { problem: '\\pi_1(S^2)', solution: '\\{e\\} \\text{ - sphere is simply connected}' },
        { problem: '\\pi_1(\\mathbb{R}^2 \\setminus \\{\\text{two points}\\})', solution: '\\mathbb{Z} * \\mathbb{Z} \\text{ (free product)}' },
      ],
    },
  },
  'Differential Geometry': {
    'Manifolds': {
      definition: 'A manifold is a space that locally resembles Euclidean space but may have a different global structure. Each point has a neighborhood homeomorphic to ℝⁿ. Manifolds provide the mathematical framework for curved spaces in physics and geometry.',
      formulas: [
        '\\text{n-manifold: locally homeomorphic to } \\mathbb{R}^n',
        '\\text{Chart: } \\phi: U \\subset M \\to \\mathbb{R}^n',
        '\\text{Atlas: collection of charts covering } M',
        '\\text{Smooth manifold: smooth transition maps}',
      ],
      examples: [
        { problem: '\\text{2-sphere } S^2', solution: '\\text{Surface of ball in } \\mathbb{R}^3, \\text{ locally looks like plane}' },
        { problem: '\\text{Torus } T^2', solution: '\\text{Product } S^1 \\times S^1, \\text{ doughnut shape}' },
        { problem: '\\text{Real projective plane } \\mathbb{RP}^2', solution: '\\text{Non-orientable 2-manifold}' },
      ],
    },
    'Curvature & Torsion': {
      definition: 'Curvature measures how much a space deviates from being flat. In differential geometry, various curvature concepts exist: sectional curvature (2D sections), Ricci curvature (average curvature), and scalar curvature (total curvature). Torsion measures twisting of curves.',
      formulas: [
        '\\text{Gaussian curvature: } K = \\kappa_1 \\kappa_2',
        '\\text{Mean curvature: } H = \\frac{\\kappa_1 + \\kappa_2}{2}',
        '\\text{Riemann curvature tensor: } R_{ijkl}',
        '\\text{Ricci tensor: } R_{ij} = R^k{}_{ikj}',
        '\\text{Scalar curvature: } R = R^i{}_i',
      ],
      examples: [
        { problem: '\\text{Sphere of radius } r', solution: '\\text{Gaussian curvature } K = \\frac{1}{r^2}' },
        { problem: '\\text{Flat plane}', solution: '\\text{All curvatures are zero}' },
        { problem: '\\text{Hyperbolic space}', solution: '\\text{Negative constant curvature}' },
      ],
    },
    'Riemannian Metrics': {
      definition: 'A Riemannian metric is a smoothly varying inner product on the tangent space at each point of a manifold. It allows measurement of lengths, angles, and volumes on curved spaces, generalizing the Euclidean metric to arbitrary manifolds.',
      formulas: [
        'g_p: T_pM \\times T_pM \\to \\mathbb{R} \\text{ (inner product at point p)}',
        '\\text{Length: } L(\\gamma) = \\int_a^b \\sqrt{g_{\\gamma(t)}(\\dot{\\gamma}(t), \\dot{\\gamma}(t))} dt',
        'ds^2 = g_{ij} dx^i dx^j \\text{ (metric tensor)}',
        '\\text{Volume element: } dV = \\sqrt{\\det(g)} dx^1 \\wedge \\cdots \\wedge dx^n',
      ],
      examples: [
        { problem: '\\text{Euclidean metric on } \\mathbb{R}^n', solution: 'ds^2 = dx_1^2 + \\cdots + dx_n^2' },
        { problem: '\\text{Sphere metric}', solution: 'ds^2 = d\\theta^2 + \\sin^2\\theta d\\phi^2' },
        { problem: '\\text{Hyperbolic metric}', solution: 'ds^2 = \\frac{dx^2 + dy^2}{y^2} \\text{ (Poincaré half-plane)}' },
      ],
    },
    'Geodesics': {
      definition: 'Geodesics are curves that locally minimize distance on a Riemannian manifold, generalizing straight lines to curved spaces. They satisfy the geodesic equation involving Christoffel symbols and represent the paths of freely moving particles in general relativity.',
      formulas: [
        '\\frac{d^2\\gamma^k}{dt^2} + \\Gamma^k_{ij} \\frac{d\\gamma^i}{dt} \\frac{d\\gamma^j}{dt} = 0',
        '\\Gamma^k_{ij} = \\frac{1}{2} g^{kl} (\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij})',
        '\\text{Christoffel symbols encode geometric properties}',
      ],
      examples: [
        { problem: '\\text{Geodesics on plane}', solution: '\\text{Straight lines}' },
        { problem: '\\text{Geodesics on sphere}', solution: '\\text{Great circles}' },
        { problem: '\\text{Geodesics in spacetime}', solution: '\\text{Worldlines of free-falling particles}' },
      ],
    },
    'Lie Groups': {
      definition: 'Lie groups are groups that are also smooth manifolds, where group operations (multiplication and inversion) are smooth maps. They combine algebraic structure with geometric structure and are fundamental in physics, representing continuous symmetries.',
      formulas: [
        '\\text{Group + Manifold + Smooth operations}',
        '\\text{Lie algebra: tangent space at identity}',
        '\\exp: \\mathfrak{g} \\to G \\text{ (exponential map)}',
        '[X,Y] = XY - YX \\text{ (Lie bracket)}',
      ],
      examples: [
        { problem: 'GL(n,\\mathbb{R})', solution: '\\text{General linear group - invertible matrices}' },
        { problem: 'SO(3)', solution: '\\text{Special orthogonal group - rotations in 3D}' },
        { problem: 'U(1)', solution: '\\text{Circle group - complex numbers of unit modulus}' },
      ],
    },
  },
  'Measure Theory & Integration': {
    'Lebesgue Integral': {
      definition: 'The Lebesgue integral extends the Riemann integral by measuring function values rather than partitioning the domain. It handles more complex functions and provides powerful convergence theorems, making it fundamental for modern analysis and probability theory.',
      formulas: [
        '\\int f d\\mu = \\sup\\{\\int \\phi d\\mu : 0 \\leq \\phi \\leq f, \\phi \\text{ simple}\\}',
        '\\text{Simple function: } s = \\sum_{i=1}^n a_i \\chi_{A_i}',
        '\\text{Monotone Convergence: } f_n \\uparrow f \\Rightarrow \\int f_n \\to \\int f',
        '\\text{Dominated Convergence: } |f_n| \\leq g, f_n \\to f \\Rightarrow \\int f_n \\to \\int f',
      ],
      examples: [
        { problem: '\\int \\chi_{\\mathbb{Q}} d\\mu \\text{ on } [0,1]', solution: '0 \\text{ (rationals have measure zero)}' },
        { problem: '\\text{Riemann vs Lebesgue}', solution: '\\text{Lebesgue handles more discontinuous functions}' },
        { problem: '\\text{Cantor function}', solution: '\\text{Not Riemann integrable, but Lebesgue integrable}' },
      ],
    },
    'Sigma-algebras': {
      definition: 'A σ-algebra is a collection of subsets closed under complements and countable unions, defining which sets are measurable. It provides the foundation for measure theory by specifying the domain of the measure function.',
      formulas: [
        '\\emptyset \\in \\mathcal{F}',
        'A \\in \\mathcal{F} \\Rightarrow A^c \\in \\mathcal{F}',
        'A_1, A_2, \\ldots \\in \\mathcal{F} \\Rightarrow \\bigcup_{i=1}^\\infty A_i \\in \\mathcal{F}',
        '\\text{Borel } \\sigma\\text{-algebra: generated by open sets}',
      ],
      examples: [
        { problem: '\\text{Power set of } \\{1,2,3\\}', solution: '\\text{All } 2^3 = 8 \\text{ subsets form } \\sigma\\text{-algebra}' },
        { problem: '\\text{Trivial } \\sigma\\text{-algebra}', solution: '\\{\\emptyset, X\\}' },
        { problem: '\\text{Borel sets on } \\mathbb{R}', solution: '\\text{Generated by open intervals}' },
      ],
    },
    'Measurable Functions': {
      definition: 'A function is measurable if the preimage of every Borel set is measurable. This ensures the function can be integrated using measure theory and is compatible with the σ-algebra structure.',
      formulas: [
        'f^{-1}(B) \\in \\mathcal{F} \\text{ for all Borel sets } B',
        '\\{x : f(x) > \\alpha\\} \\in \\mathcal{F} \\text{ for all } \\alpha',
        '\\text{Continuous functions are measurable}',
        '\\text{Pointwise limits of measurable functions are measurable}',
      ],
      examples: [
        { problem: '\\text{Indicator function } \\chi_A', solution: '\\text{Measurable iff } A \\text{ is measurable}' },
        { problem: '\\text{Step functions}', solution: '\\text{Always measurable}' },
        { problem: '\\text{Continuous functions}', solution: '\\text{Measurable w.r.t. Borel } \\sigma\\text{-algebra}' },
      ],
    },
    'Fubini\'s Theorem': {
      definition: 'Fubini\'s Theorem allows changing the order of integration in product spaces, stating that for integrable functions, iterated integrals equal the integral over the product space. It is fundamental for multivariable integration and probability theory.',
      formulas: [
        '\\int_{X \\times Y} f(x,y) d(\\mu \\times \\nu) = \\int_X \\left[\\int_Y f(x,y) d\\nu(y)\\right] d\\mu(x)',
        '= \\int_Y \\left[\\int_X f(x,y) d\\mu(x)\\right] d\\nu(y)',
        '\\text{Requires } f \\text{ integrable on } X \\times Y',
        '\\text{Product measure: } (\\mu \\times \\nu)(A \\times B) = \\mu(A) \\nu(B)',
      ],
      examples: [
        { problem: '\\int_0^1 \\int_0^1 xy \\, dx \\, dy', solution: '\\int_0^1 x dx \\int_0^1 y dy = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}' },
        { problem: '\\text{Double integral over rectangle}', solution: '\\text{Can compute as iterated integral}' },
        { problem: '\\text{Joint probability distribution}', solution: 'P(X \\in A, Y \\in B) = \\int_A \\int_B f(x,y) dy dx' },
      ],
    },
  },
  'Functional Analysis': {
    'Normed Spaces': {
      definition: 'A normed space is a vector space equipped with a norm function that measures the length or size of vectors. The norm satisfies positive definiteness, homogeneity, and triangle inequality, providing a framework for analysis in infinite-dimensional spaces.',
      formulas: [
        '\\|x\\| = 0 \\iff x = 0 \\text{ (Positive definiteness)}',
        '\\|\\alpha x\\| = |\\alpha| \\|x\\| \\text{ (Homogeneity)}',
        '\\|x + y\\| \\leq \\|x\\| + \\|y\\| \\text{ (Triangle inequality)}',
        '\\|x\\|_p = \\left(\\sum |x_i|^p\\right)^{1/p} \\text{ (p-norm)}',
      ],
      examples: [
        { problem: '\\mathbb{R}^n \\text{ with Euclidean norm}', solution: '\\|x\\|_2 = \\sqrt{\\sum x_i^2}' },
        { problem: 'C[a,b] \\text{ with sup norm}', solution: '\\|f\\|_\\infty = \\sup_{x \\in [a,b]} |f(x)|' },
        { problem: '\\ell^p \\text{ sequence spaces}', solution: '\\|x\\|_p = \\left(\\sum |x_n|^p\\right)^{1/p}' },
      ],
    },
    'Banach & Hilbert Spaces': {
      definition: 'Banach spaces are complete normed vector spaces where every Cauchy sequence converges. Hilbert spaces are complete inner product spaces, providing both norm and orthogonality. They are fundamental in functional analysis and quantum mechanics.',
      formulas: [
        '\\text{Banach: complete normed space}',
        '\\text{Hilbert: complete inner product space}',
        '\\|x\\| = \\sqrt{\\langle x, x \\rangle} \\text{ (norm from inner product)}',
        '\\text{Parallelogram law: } \\|x+y\\|^2 + \\|x-y\\|^2 = 2(\\|x\\|^2 + \\|y\\|^2)',
      ],
      examples: [
        { problem: '\\mathbb{R}^n', solution: '\\text{Both Banach and Hilbert space}' },
        { problem: 'L^2[a,b]', solution: '\\text{Hilbert space of square-integrable functions}' },
        { problem: 'C[a,b]', solution: '\\text{Banach space with sup norm}' },
      ],
    },
    'Linear Operators': {
      definition: 'Linear operators are structure-preserving maps between vector spaces. Bounded linear operators are continuous and have finite operator norm. They are central to functional analysis, representing transformations in infinite-dimensional spaces.',
      formulas: [
        'T(ax + by) = aT(x) + bT(y) \\text{ (Linearity)}',
        '\\|T\\| = \\sup_{\\|x\\|=1} \\|T(x)\\| \\text{ (Operator norm)}',
        '\\text{Bounded} \\iff \\text{Continuous}',
        '\\|T(x)\\| \\leq \\|T\\| \\|x\\| \\text{ (Boundedness condition)}',
      ],
      examples: [
        { problem: '\\text{Differentiation operator}', solution: 'D(f) = f\' \\text{ on } C^1[0,1]' },
        { problem: '\\text{Multiplication operator}', solution: '(Mf)(x) = x f(x)' },
        { problem: '\\text{Integral operator}', solution: '(Tf)(x) = \\int_0^x f(t) dt' },
      ],
    },
    'Spectral Theory': {
      definition: 'Spectral theory studies eigenvalues, eigenvectors, and the spectrum of operators, generalizing linear algebra to infinite dimensions. The spectrum includes point spectrum (eigenvalues), continuous spectrum, and residual spectrum.',
      formulas: [
        '\\sigma(T) = \\{\\lambda : T - \\lambda I \\text{ not invertible}\\}',
        '\\text{Point spectrum: } T(x) = \\lambda x',
        '\\text{Spectral radius: } r(T) = \\sup\\{|\\lambda| : \\lambda \\in \\sigma(T)\\}',
        '\\text{Resolvent: } R(\\lambda, T) = (T - \\lambda I)^{-1}',
      ],
      examples: [
        { problem: '\\text{Finite matrices}', solution: '\\text{Spectrum = eigenvalues}' },
        { problem: '\\text{Multiplication by } x \\text{ on } L^2[0,1]', solution: '\\text{Continuous spectrum } [0,1]' },
        { problem: '\\text{Shift operator on } \\ell^2', solution: '\\text{Spectrum is unit circle}' },
      ],
    },
  },
};

export const getDomainSubtopics = (domainName: string): string[] => {
  const domain = domains.find(d => d.name === domainName);
  return domain ? domain.subtopics : [];
};

export const getTopicContent = (domainName: string, subtopic: string): TopicContent | null => {
  const domainContent = topicContentDatabase[domainName];
  if (!domainContent) return null;
  
  return domainContent[subtopic] || null;
};
