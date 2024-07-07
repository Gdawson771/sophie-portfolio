<template>
    <div class="blue-gradient-reverse flex flex-col p-16 gap-2 min-h-screen">
        <h1 class="text-white text-2xl pb-4">Here is a breakdown of the courses I took during my M-Math, alongside my thoughts on them and some recommendations for Math students.</h1>
        <input type="text" v-model="searchQuery" placeholder="Search by title or summary..."
            class="mb-4 p-2 rounded border-2 border-gray-300">

        <div class="flex gap-8">
            <MultiSelect class="bg-white " display="chip" v-model="creditsQuery" placeholder="Filter by credits"
                optionLabel="name" :options="creditsOptions" :multiple="true"></MultiSelect>
            <MultiSelect class="bg-white" display="chip" v-model="levelQuery" placeholder="Filter by level"
                optionLabel="name" :options="levelOptions" :multiple="true"></MultiSelect>
        </div>

        <div v-for="(yearCourses, year) in filteredCourses" :key="year" class="flex gap-4 flex-col">
            <div class="font-bold text-red-600 text-2xl">Year {{ year }}</div>
            <div v-for="course in yearCourses" :key="course.title"
                class="bg-gray-700 border-2 border-green-300 w-full flex flex-col p-4 gap-2 rounded-xl shadow-2xl">
                <h3 class="font-semibold text-green-400 text-lg">{{ course.title }} ({{ course.credits }} credits, level
                    {{ course.level }})</h3>
                <p class="text-white">{{ course.description }}</p>
            </div>
        </div>
        <div v-if="Object.keys(filteredCourses).length === 0" class="h-screen text-white text-2xl flex w-full jusitfy-center items-center flex-col">
            Sorry no courses match your search
            <NuxtImg src="/images/NoItemsCart.svg" alt="Empty Cart Image" class="w-1/2"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import 'primevue/resources/themes/aura-light-green/theme.css'

import MultiSelect from 'primevue/multiselect';

// import Multiselect from 'vue-multiselect'

const creditsOptions = [{ name: '10 Credits', value: 10 }, { name: '20 Credits', value: 20 }, { name: '40 Credits', value: 40 }];
const levelOptions = [{ name: 'Level 10', value: 10 }, { name: 'Level 11', value: 11 }];
const searchQuery = ref('');
const levelQuery = ref([]);
const creditsQuery = ref([]);

const filteredCourses = computed(() => {
    let filtered = {};
    for (const year in courses.value) {
        console.log(creditsQuery.value);
        let filteredCourses = courses.value[year].filter(course =>
            (course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.value.toLowerCase())) &&
            (creditsQuery.value.length === 0 || creditsQuery.value.some((credits) => credits.value === course.credits)) &&
            (levelQuery.value.length === 0 || levelQuery.value.some((level) => level.value === course.level))
        );
        if (filteredCourses.length > 0) {
            filtered[year] = filteredCourses;
        }
    }
    return filtered
})
const inLevelQuery = (newTag) => {
    const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
    };
    options.value.push(tag); // Add to options array
    value.value.push(tag); // Add to value array
};

const courses = ref({
    3: [
        {
            title: "Honours Differential Equations",
            credits: 20,
            level: 10,
            description: "I didn't get that much from this course, as my interests lie more in pure methematics, but I enjoyed the methods aspect of it. It covered systems of first order linear ODEs; numerical methods; nonlinear systems of ODEs, linear approximation arounds a critical point, and Lyapunov functions; Fourier series; PDEs by separation of variables; Sturm-Liouville theory; Laplace tranform. The skills aspect of the course was a very satisfying course in using Python to plot phase portraits, solve ODEs, explore dynamical systems with SciPy ODE solvers, numerical methods, Fourier series, and plots/animations of PDEs."
        },
        {
            title: "Honours Complex Variables",
            credits: 20,
            level: 10,
            description: "This course, taught by Richard Gratwick, is one of the best taught courses in the school of maths, and I strongly recommend taking it if you have the opportunity. It covers a basis of complex analysis, including holomorphic functions on the complex plane; Moebius transformations; complex integration (via Cauchy Integral theorem, Cauchy Integral Formulae, Morera's Theorem, Liouville's Theorem and the Maximum modulus principle); Taylor and Laurent series expansions; and Residue theory. The 'skills' aspect of the course was to learn how to present mathematical writing using LaTeX, which was enjoyable and informative - if somewhat more harsh in its marking scheme. This course taught me the correct use of the semicolon!"
        },
        {
            title: "Honours Analysis",
            credits: 20,
            level: 10,
            description: "I enjoyed this first course in analysis, taught by Martin Dindos, which followed on from the basic semi-course contained in the year 2 course, Fundamentals of pure mathematics. The course included: Cauchy sequences; continuity; compactness; sequences of real numbers and the Bolzano-Weierstrass theorem; absolutely convergent series; power series; sequences and series of functions; the Lebesgue integral; and Fourier series. The 'skills' aspect of the course was focused on the presentation of mathematical work, comprising of fortnightly presentations to a group of peers. The presentations were two-minutes in duration and we received feedback from both peers and from an assessor. I learned a lot through the preparation and conduct of the presentations, which set me up well for future presentations."
        },
        {
            title: "Honours Algebra",
            credits: 20,
            level: 10,
            description: "Following the algebra aspect of the Fundamentals of pure mathematics course in Y2, this course in algebra was a massive step up in theory and technique. The course, taught by Harry Braden and Iain Gordon, is a challenging course, focusing on algebraic abstraction. In the course, we covered: linear transformations and the Smith normal form; rings, modules, polynomials, Euclidean algorithm; quotient rings and the isomorphism theorems; multilinear forms, diagonalisation and triangulisation of linear mappings, Cayley-Hamilton theorem and Perron-Frobenius theorem; inner-product spaces, orthogonal projection, the Gram-Schmidt process; adjoints of linear transformations, spectral theorem for finite dimensional inner product spaces; and the Jordan normal form. The 'skills' aspect of the course was an introduction to Sage programming, a variation on Python which I have used in my dissertation and various projects, and is incredibly useful to me as a pure mathematician, so I would strongly recommend taking this course even if just for this part of it."
        },
        {
            title: "Introduction to Number Theory",
            credits: 10,
            level: 10,
            description: "Taught by Prof Agata Smoktunowicz, this course was one of my favourites of this year. It is a basic introduction, but gives you all the tools you will need to progress as a mathematician. We covered: the Euclidean algorithm; Euler's theorem; Euler's totient; quadratic residues and the Legendre symbol; Gaussian integers; and coding theory."
        },
        {
            title: "Combinatorics and Graph Theory",
            credits: 10,
            level: 10,
            description: "Following on from the graph theory element of the Y2 Fundamentals of pure mathematics course, this basic course in combinatorics was a great introduction to approaching problem solving questions using methods in which we spot and establish patterns. It was taught by Prof David Jordan, who is a fantastic teacher and a supportive tutor. We covered: properties of graphs (Eulerian, Hamiltonian, planar, bipartite, connected); Kuratowski's characterization of planar graphs; Hall's marriage theorem and equivalent bipartite graph formulations; generating functions and Polya counting; exponential generating functions; counting problems such as numbers of paths through a graph."
        },
        {
            title: "Geometry",
            credits: 10,
            level: 10,
            description: "This was a first course in geometry taught by Dr Johan Martens, which was an essential introduction to future study in geometry. Be warned: it is a collection of concepts that most mathematicians have not the tools to understand immediately. I personally took a lot of practice before I fully understood a lot of the contents of the course. I think I would have been better equipped for ideas such as that of duality if I had taken honours algebra beforehand. The course covered: regularity of curves in Euclidean space; Frenet-Serret frame; curvature and torsion; differential forms; moving frames; structure equations; first and second fundamental forms; principal, mean and Gauss curvatures; isometry; Gauss's Theorema Egregium; geodesics on surfaces; hyperbolic plane; integration of forms; Stokes' theorem; Euler characteristic; and Gauss-Bonnet theorem."
        },
        {
            title: "Metric Spaces",
            credits: 10,
            level: 10,
            description: "Taught by Dr Nikolaos Bournaveas, this course was built as an extension to the concepts taught in Honours Analysis. The course was very well taught, but quite harshly marked. In the course we covered: translation of ideas from Euclidean space to the more general setting of a metric space; boundary and interior of a space; diameter of a set; induced metric on a subspace, and relative closedness; disconnections of subsets of metric spaces; uniform continuity in metric spaces; compactness; path-connectedness."
        }
    ],
    4: [
        {
            title: "Mathematics Project",
            credits: 20,
            level: 10,
            description: "I participated in a group project on brace theory, supervised by Prof Agata Smoktunowicz."
        },
        {
            title: "General Topology",
            credits: 10,
            level: 10,
            description: "This was a fantastic course, taught by Prof Clark Barwick. I would strongly recommend any of his courses if you are at all interested in algebra, geometry and topology. We covered: topological spaces and continuous functions; topological invariants (such as number of path components); fibres of maps; properties and manipulation of the Cantor space; local homeomorphisms; the Riemann sphere homeomorphism; preorders and sieves; projective space of dimension n; quotient spaces; the profinite completion of the integers; the box vs the product topology; Hausdorff spaces and closed graphs; compactness; the Alexandroff topology; solenoids; and ultrametrics."
        },
        {
            title: "Group Theory",
            credits: 10,
            level: 10,
            description: "This course, taught by Prof Agata Smoktunowicz, is an excellent coverage of group theory, with a great collection of notes which has been compiled over the years by different lecturers. It covers: the Sylow theorems; group homomorphisms; group presentations; abstract structural properties of composition series; and classes of groups (such as abelian and solvable groups)."
        },
        {
            title: "Galois Theory",
            credits: 10,
            level: 10,
            description: "I would strongly recommend any course taught by Prof Tom Leinster, who is an incredible teacher (although a harsh marker, so don't be disheartened if your grades aren't what you'd hoped). We covered: field extensions; separability, normality and splitting fields; field automorphisms and Galois groups; the fundamental theorem of Galois theory; solvable groups and the insolubility of the general quintic; ruler and compass constructions; and calculation of Galois groups."
        },
        {
            title: "Linear Analysis",
            credits: 10,
            level: 10,
            description: "This course was an introduction to functional analysis taught by Dr Pieter Blue. The lectures for the course were mainly replicates of the course notes, but helpful nonetheless. We covered: inner product spaces and normed spaces; completeness and completions of spaces; Lp spaces, Holder and Minkowski inequalities; geometric and metric properties of Hilbert spaces; orthonormal spaces and generalised Fourier series; bounded linear functionals and operators; duality; and spectral theorem for compact, self-adjoint operators on a Hilbert space."
        },
        {
            title: "Reading course: Representation theory of the symmetric group",
            credits: 10,
            level: 11,
            description: "This reading course, supervised by Pavel Safronov, was based on Bruce Sagan's book 'The symmetric group'. We covered: the construction of irreducible representations of S_n; Young's rule; the Robinson--Schensted algorithm; Knuth's relation; hook and determinantal formulas; the ring of symmetric functions; Schur functions."
        },
        {
            title: "Algebraic Geometry",
            credits: 10,
            level: 11,
            description: "This course was a comprehensive introduction to the field of algebraic geometry, taught by Prof Pavel Safronov. It was fast-paced, but gratifying. We covered: the projective plane, plane curves, the classification of conics; intersections of curves, Bezout's theorem; classification of cubics; group law on elliptic curves; elliptic curves over rationals, finite fields and complex numbers; Noetherian rings, Hilbert basis theorem and the nullstellensatz; affine varieties; Zariski topology, rational maps, projective varieties; quadratic surfaces; cubic surfaces, and the 27 lines on a smooth cubic surface; and birational geometry and blow ups."
        },
        {
            title: "Interactions in Algebra, Geometry, and Topology",
            credits: 10,
            level: 11,
            description: "This was a course in sheaf theory, taught by Prof Clark Barwick. The 'interactions' and 'topics' and 'methods' courses are all very flexible, and it is up to the lecturer to choose what will be covered under that broad heading. We were given an introduction to sheaves, covering: covering spaces; category theory; presheaves; sheaves; local and global properties; constant and locally constant sheaves; stalks; and localisation."
        },
        {
            title: "Analytic Number Theory",
            credits: 10,
            level: 11,
            description: "Taught by Prof Jim Wright, this course in analytic number theory was a fast paced journey through the discussion of the Riemann hypothesis. We covered: properties of the Riemann zeta function and its analytic continuation; Euler's product formula; the divergence of the reciprocal sum of primes; the prime number theorem; Dirichlet series and Dirichlet characters; L-functions; and Dirichlet's theorem on infinitely many primes in an arithmetic progression."
        },
        {
            title: "Further Complex Variables",
            credits: 10,
            level: 11,
            description: "Also taught by Prof Jim Wright, this course was, as you might expect, an extension of the honours complex variables course in Y3. We covered: entire functions and their Taylor series expansions; determining complex polynomials by their zeros; Runge's theorem; the Weierstrass factorisation theorem; the critical strip of the Riemann zeta function; the Mittag-Leffler theorem."
        },
        {
            title: "Differential Geometry",
            credits: 10,
            level: 11,
            description: "This course was lectured by Jose Miguel Figueroa-O'Farrill. Similarly to the Y3 geometry course, this was an intense exposition of many new concepts, which made the course challenging but gratifying. The course covered: smooth manifolds; the manifold topology, and submanifolds as level sets; tangent and cotangent spaces, and the derivative of a smooth map; the tangent bundle, vector fields, derivations, flows and the Lie derivative; vector bundles and tensor fields; differential forms, Cartan calculus, de Rham cohomology; orientation, integration and Stokes' theorem."
        }
    ],
    5: [
        {
            title: "Commutative Algebra",
            credits: 10,
            level: 10,
            description: "This course was lectured by Prof Sue Sierra, who is an enthralling lecturer. I thoroughly enjoyed this course. We covered: integral domains, unique factorisation domains, Noetherian rings; Hilbert's basis theorem; prime and maximal ideals; Groebner bases; Buchberger's algorithm; solving systems of polynomial equations in multiple variables; and Hilbert's nullstellensatz."
        },
        {
            title: "Algebraic Topology",
            credits: 10,
            level: 10,
            description: "This course was taught by Prof Jon Pridham, and is an in-depth study of the basics of algebraic topology. We covered: compact surfaces; homotopy; fundamental groups; covering spaces."
        },
        {
            title: "Dissertation",
            credits: 40,
            level: 11,
            description: "My dissertation on the positivity and integrality of mirror maps, supervised by Prof Nick Sheridan, can be found here."
        },
        {
            title: "Topics in Noncommutative Algebra",
            credits: 10,
            level: 11,
            description: "This was an introductory course to noncommutative ring theory taught by Prof Agata Smoktunowicz. We covered: noncommutative (possibly associative) rings; braces and the Yang-Baxter equation; the well-defined radical and corresponding semisimple quotient of a ring; nil and nilpotent ideals and the Jacobson radical; the Artin-Wedderburn theorem; Artinian rings; simple, prime and semi-prime rings; idempotent elements; and the Brauer lemma."
        },
        {
            title: "Category Theory",
            credits: 10,
            level: 11,
            description: "This course was taught excellently by Prof Tom Leinster, and served as a summary of his book, Basic category theory. Category theory is truly meta in the world of mathematics, but he brings intuition and enjoyment to the subject. The book is available as a pdf online if you are interested. We covered: categories, functors and natural transformations; adjoints; representables; and limits."
        },
        {
            title: "Introduction to Lie Groups",
            credits: 10,
            level: 11,
            description: "Taught by Prof Pavel Safronov, this course gave an introduction to the study of Lie algebras, which have applications in geometry and physics. It was fast-paced and challenging, like most of his courses, but the exam was fair. We covered: matrix groups and matrix Lie algebras; Lie groups, subgroups and actions; connected and simply connected groups; spin groups; the exponential map and the Lie algebra of a Lie group; complexifications and representations; irreducible representations and Schur's lemma; solvable and semisimple Lie algebras; Killing form; compact Liegroups vs complex semisimple Lie algebras; Cartan suballgebras; root decomposition; abstract root systems and the Weyl group; root and weight lattices; Dynkin diagrams and classification of complex semisimple Lie algebras."
        },
        {
            title: "Reading course: Homological Algebra",
            credits: 10,
            level: 11,
            description: "This reading course was supervised by Prof Pavel Safronov, but was essentially the SMSTC homological algebra course (a course taught by the school for first year PhD students). The course comprised of a weekly 90 minute lecture, as well as fortnightly workshops. We also met with Pavel to discuss our progress for an hour each week. We covered: abelian categories; injective and projective objects; derived functors and sheaf cohomology; group cohomology and Hochschild cohomology; spectral sequences; derived categories; dg categories; and simplicial objects and the Dold-Kan correspondence."
        },
        {
            title: "Modern methods in Geometry and Topology",
            credits: 10,
            level: 11,
            description: "This iteration of the course took the form of an introduction to higher category theory, taught by Prof Clark Barwick. We covered; the simplex category; generators of categories; the definition of skeletal and coskeletal; geometric realization; higher groupoids; functor categories; slice categories; limits and colimites; twisted arrow categories; cartesian and cocartesian fibrations; and adjunctions."
        },
        {
            title: "Functional Analysis",
            credits: 10,
            level: 10,
            description: "Taught by Dr Robbie Bickerton, this course was a continuation of the linear analysis course. The exam was closed book unlike most exams at the university, but the exam was fair. We covered: linear spaces and their norms; the Hahn-Banach theorem; the Baire category theorem; the uniform boundedness principle; the open mapping theorem; the closed graph theorem; duality in Banach and Hilbert spaces; spectral theory for compact operators on Banach spaces; Fredholm alternative; weak topologies; the Banach-Alaoglu theorem; and the Arzela-Ascoli theorem."
        }
    ]
});


</script>

<style scoed>
.blue-gradient-reverse {
    background-image: linear-gradient(180deg,
            hsl(221deg 91% 9%) 0%,
            hsl(221deg 89% 10%) 9%,
            hsl(219deg 86% 12%) 18%,
            hsl(218deg 85% 13%) 27%,
            hsl(216deg 83% 14%) 36%,
            hsl(216deg 80% 16%) 45%,
            hsl(214deg 79% 17%) 55%,
            hsl(213deg 76% 18%) 64%,
            hsl(211deg 74% 19%) 73%,
            hsl(210deg 72% 21%) 82%,
            hsl(209deg 70% 22%) 91%,
            hsl(207deg 68% 23%) 100%);
}
</style>