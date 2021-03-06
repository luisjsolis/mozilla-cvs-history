/* -*- Mode: C; indent-tabs-mode: nil; -*-
 *
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the TripleDB database library.
 *
 * The Initial Developer of the Original Code is
 * Geocast Network Systems.
 * Portions created by the Initial Developer are Copyright (C) 2000
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Terry Weissman <terry@mozilla.org>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

#ifndef _intern_h_
#define _intern_h_ 1

extern TDBIntern* tdbInternInit(TDBBase* base);

extern void tdbInternFree(TDBIntern* intern);

/* tdbIntern() takes a non-interned node and returns an atom representing it.
   The returned node should be free'd with TDBFreeNode(). */

extern TDBNodePtr tdbIntern(TDBBase* base, TDBNodePtr node);


/* tdbUnintern() takes an atom and allocates a new node representing it.  The
   returned node should be free'd with TDBFreeNode(). */

extern TDBNodePtr tdbUnintern(TDBBase* base, TDBNodePtr node);

/* tdbRTypeSync() causes any changes made to intern tables to be written out
   to disk. */

extern TDBStatus tdbInternSync(TDBBase* base);



#endif /* _intern_h_ */
