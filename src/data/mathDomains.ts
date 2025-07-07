
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
};

export const getDomainSubtopics = (domainName: string): string[] => {
  const domain = domains.find(d => d.name === domainName);
  return domain ? domain.subtopics : [];
};

export const getTopicContent = (domainName: string, subtopic: string): TopicContent | null => {
  return topicContentDatabase[domainName]?.[subtopic] || null;
};
