/* Fix module-level arrays in PerformanceVerification to store keys, translate at render */
const fs = require('fs');
let s = fs.readFileSync('src/pages/PerformanceVerification.tsx', 'utf8');

// 1. Convert broken string-wrapped t() calls back to plain key strings in arrays
s = s.replace(/'\{t\('([^']+)'\)\}'/g, "'$1'");
s = s.replace(/'\{t\('([^']+)'\)\}'/g, "'$1'");

// 2. Fix publishFields/badges/metrics/redFlags/faqs object literal keys that may still be wrapped
s = s.replace(/field: '\{t\('([^']+)'\)\}', why: '\{t\('([^']+)'\)\}'/g, "field: '$1', why: '$2'");

// 3. Translate at render sites:
// verificationSteps (array of key strings)
s = s.replace(/\{step\}/g, "{t(step)}");
// publishFields
s = s.replace(/\{f\.field\}/g, "{t(f.field)}");
s = s.replace(/\{f\.why\}/g, "{t(f.why)}");
// badges
s = s.replace(/\{b\.badge\}/g, "{t(b.badge)}");
s = s.replace(/\{b\.requirement\}/g, "{t(b.requirement)}");
s = s.replace(/\{b\.status\}/g, "{t(b.status)}");
// metrics
s = s.replace(/\{m\.metric\}/g, "{t(m.metric)}");
s = s.replace(/\{m\.calc\}/g, "{t(m.calc)}");
s = s.replace(/\{m\.tells\}/g, "{t(m.tells)}");
// auditSteps
s = s.replace(/\{step\}/g, "{t(step)}");
// redFlags
s = s.replace(/\{r\.flag\}/g, "{t(r.flag)}");
s = s.replace(/\{r\.ask\}/g, "{t(r.ask)}");
// faqs
s = s.replace(/\{item\.q\}/g, "{t(item.q)}");
s = s.replace(/\{item\.a\}/g, "{t(item.a)}");

fs.writeFileSync('src/pages/PerformanceVerification.tsx', s);
console.log('arrays fixed');
