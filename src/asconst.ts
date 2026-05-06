// as const assertion


// enum UserRoles {
//     Admin = "admin",
//     Editor = "editor",
//     Viewer = "viewer",
// }

const UserRoles = {
    Admin: "admin",
    Editor: "editor",
    Viewer: "viewer",
} as const

/**
 * const UserRoles = {
    readonly Admin: "admin",
    readonly Editor: "editor",
    readonly Viewer: "viewer",
   } 

   1. typeof operater : type operator that takes a value and produces its type
   2. keyof operater : type operator that takes an object type and produces a string or numeric literal union of its keys.


 */

UserRoles.Admin = "admin1" // error

const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    }
    return false
}

const isEditPermiddable = canEdit(UserRoles.Admin)
console.log(isEditPermiddable)
