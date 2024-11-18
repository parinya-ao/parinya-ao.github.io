export default (await import('vue')).defineComponent({
    data() {
        return {
            Email: 'flim.parinya.ao@gmail.com',
            Location: 'Bangkok, Thailand',
            FullName: 'Parinya Aobaun',
            NickName: 'flim',
        };
    },
    computed: {
        // สร้างลิงก์ mailto:
        emailLink() {
            return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.Email)}`;
        },
        LinkinLink() {
            const linkinLINKURL = 'parinya-aobaun';
            return `https://linkedin.com/in/${linkinLINKURL}`;
        },
        GithubLink() {
            const linkGithubURL = 'parinya-ao';
            return `https://github.com/${linkGithubURL}`;
        },
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.emailLink)), target: ("_blank"), });
    (__VLS_ctx.Email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ id: ("location"), });
    (__VLS_ctx.Location);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ style: ({}) }, });
    (__VLS_ctx.FullName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    (__VLS_ctx.NickName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("righ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.LinkinLink)), target: ("_blank"), ...{ class: ("social-link") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.GithubLink)), target: ("_blank"), ...{ class: ("social-link") }, });
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['left'];
    __VLS_styleScopedClasses['center'];
    __VLS_styleScopedClasses['righ'];
    __VLS_styleScopedClasses['social-link'];
    __VLS_styleScopedClasses['social-link'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
