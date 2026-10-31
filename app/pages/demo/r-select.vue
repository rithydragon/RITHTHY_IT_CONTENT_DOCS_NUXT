<template>
  <div class="rselect-demo">
    <h1>RSelect — Usage Reference</h1>

    <!-- 1. Basic single select, local data -->
    <section>
      <h2>1. Single select — local data</h2>
      <RSelect
        v-model="form.department"
        :local-data="{ data: departments, keySearch: ['NameEnglish', 'Name'] }"
        pk="Id"
        placeholder="Select department"
        :searchInput="false"
      />
      <pre>{{ form.department }}</pre>
    </section>

    <!-- 2. Multiple select -->
    <section>
      <h2>2. Multiple select — local data</h2>
      <RSelect
        v-model="form.staffIds"
        :multiple="true"
        :local-data="{ data: staffList }"
        pk="Id"
        placeholder="Select staff"
      />
      <pre>{{ form.staffIds }}</pre>
    </section>

    <div>
      <h3 class="text-lg font-semibold mb-2">Multiple Select with Local Data</h3>
      <RSelect
        v-model="selectedUsers"
        :local-data="localUsersData"
        :pk="'id'"
        :multiple="true"
        :template-leading="{
          labelKey: 'name',
          labelKeyEn: 'nameEn',
          imagePath: 'avatar',
          imageType: 'user'
        }"
        :template-option="{
          labelKey: 'name',
          labelKeyEn: 'nameEn',
          subLabelKey: 'email',
          subLabelKeyEn: 'email',
          imagePath: 'avatar',
          imageType: 'user'
        }"
        placeholder="Select users"
        @selected="handleMultipleSelect"
      />
      <pre>Selected: {{ selectedUsers ? selectedUsers?.map(u => u.name).join(', ') : 'None' }}</pre>
    </div>

    <!-- 3. Remote/API-backed single select -->
    <section>
      <h2>3. Employees - Remote select — API, server search + pagination</h2>
      <RSelect
        ref="refCustomerSelect"
        v-model="form.customer"
        :api="{
          url: 'api/v1/employees/list',
          method: 'POST',
          filter: customerFilter
        }"
        pk="id"
        v-model:loading="isLoadingCustomers"
        placeholder="Search customer"
        :template-leading="{
          labelKey: 'firstName',
          labelKeyEn: 'firstNameEn',
          imagePath: 'avatar',
          imageType: 'user'
        }"
        :template-option="{
          labelKey: 'firstName',
          labelKeyEn: 'firstNameEn',
          subLabelKey: 'lastName',
          subLabelKeyEn: 'lastNameEn',
          imagePath: 'avatar',
          imageType: 'user'
        }"
        @selected="onCustomerSelected"
        @mapData="onCustomerListLoaded"
      />
      <div class="row">
        <RBtn size="xs" @click="selectCustomerById(42)">Select customer #42</RBtn>
        <RBtn size="xs" variant="outline" @click="reloadCustomers">Reload list</RBtn>
      </div>
      <p v-if="isLoadingCustomers">Loading customers…</p>
      <pre>{{ form.customer }}</pre>
    </section>
    
    <section>
      <h2>4. Employees - Remote select — API, server search + pagination</h2>
      <RSelect
        v-model="selectedEmployees"
        :api="{
          url: 'api/v1/employees/list',
          method: 'POST',
        }"
        pk="id"
        :searchInput="true"
      >
        <!-- Selected value -->
        <template #leading="{ data }">
          <div class="flex items-center gap-2">
            <RAvatar :src="data.avatar" />
            <span>
              {{ tBy({en:`${data.firstNameEn} ${data.lastNameEn}` , km: `${data.firstName} ${data.lastName}`}) }}
            </span>
          </div>
        </template>

        <!-- Dropdown options -->
        <template #option="{ data }">
          <div class="flex items-center gap-3 w-full">
            <RAvatar :src="data.avatar" />
            <div>
              <div class="font-medium"> {{ tBy({en:`${data.firstNameEn} ${data.lastNameEn}`, km: `${data.firstName} ${data.lastName}`}) }}</div>

              <div class="text-xs text-gray-500">
                {{ data.job }}
              </div>
            </div>
          </div>
        </template>
      </RSelect>
      <pre>Selected: {{ selectedEmployees }}</pre>
    </section>

    <!-- 4. Remote/API-backed multiple select -->
    <section>
      <h2>5. Remote select — multiple</h2>
      <RSelect
        v-model="form.customerIds"
        multiple
        :api="{ url: 'api/v1/employees/list', method: 'POST' }"
        pk="Id"
        placeholder="Search customers"
      />
      <pre>{{ form.customerIds }}</pre>
    </section>

    <!-- 5. templateOption / templateLeading (no custom slots needed) -->
    <section>
      <h2>5. Custom field mapping via templateOption / templateLeading</h2>
      <RSelect
        v-model="form.employee"
        :local-data="{ data: employees }"
        pk="Id"
        placeholder="Select employee"
        :template-option="{
          labelKey: 'Name',
          labelKeyEn: 'NameEnglish',
          subLabelKey: 'Position',
          subLabelKeyEn: 'PositionEnglish',
          imagePath: 'AvatarUrl',
          gender: 'Gender'
        }"
        :template-leading="{
          labelKey: 'Name',
          labelKeyEn: 'NameEnglish',
          imagePath: 'AvatarUrl',
          gender: 'Gender'
        }"
      />
      <pre>{{ form.employee }}</pre>
    </section>

    <!-- 6. Fully custom rendering via slots -->
    <section>
      <h2>6. Custom option/leading slots</h2>
      <RSelect
        v-model="form.branch"
        :local-data="{ data: branches }"
        pk="Id"
        placeholder="Select branch"
      >
        <template #option="data">
          <div class="branch-row">
            <img :src="data.data.LogoUrl" class="branch-logo" />
            <div>
              <div class="branch-name">{{ data.data.NameEnglish }}</div>
              <div class="branch-sub">{{ data.data.Address }}</div>
            </div>
          </div>
        </template>

        <template #leading="{ data }">
          <img :src="data.LogoUrl" class="branch-logo-sm" />
        </template>
      </RSelect>
      <pre>{{ form.branch }}</pre>
    </section>

    <!-- 7. Variants / states -->
    <section>
      <h2>7. Variants, disabled, no-clear, full width</h2>
      <div class="stack">
        <RSelect v-model="form.a" :local-data="{ data: departments }" pk="Id" variant="outline" placeholder="outline (default)" />
        <RSelect v-model="form.b" :local-data="{ data: departments }" pk="Id" variant="solid" placeholder="solid" />
        <RSelect v-model="form.c" :local-data="{ data: departments }" pk="Id" variant="solidBackGround" placeholder="solidBackGround" />
        <RSelect v-model="form.d" :local-data="{ data: departments }" pk="Id" variant="none" placeholder="none" />
        <RSelect v-model="form.e" :local-data="{ data: departments }" pk="Id" disabled placeholder="disabled" />
        <RSelect v-model="form.f" :local-data="{ data: departments }" pk="Id" default-select required placeholder="required (no clear row)" />
        <RSelect v-model="form.g" :local-data="{ data: departments }" pk="Id" default-select full-width placeholder="default-select + full-width" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, useTemplateRef } from 'vue'
definePageMeta({ layout:'navbar'})
// ---- 1 & 2: local data sources ----
const departments = ref([
  { Id: 1, NameEnglish: 'Engineering', Name: 'ផ្នែកវិស្វកម្ម' },
  { Id: 2, NameEnglish: 'Sales', Name: 'ផ្នែកលក់' },
  { Id: 3, NameEnglish: 'HR', Name: 'ធនធានមនុស្ស' }
])

const staffList = ref([
  { Id: 11, NameEnglish: 'Sokha', Name: 'សុខា' },
  { Id: 12, NameEnglish: 'Dara', Name: 'ដារា' },
  { Id: 13, NameEnglish: 'Vanna', Name: 'វណ្ណា' }
])
const selectedUsers = ref([]);
const selectedEmployees = ref([])
// ---- 3 & 4: remote data ----
const isLoadingCustomers = ref(false)
const customerFilter = reactive({ Status: 'Active' }) // change this ref to trigger auto-reload
const refCustomerSelect = useTemplateRef('refCustomerSelect')

function onCustomerSelected(customer) {
  console.log('customer selected:', customer)
}
function onCustomerListLoaded(list) {
  console.log('customer list loaded:', list)
}
function selectCustomerById(id) {
  // uses the exposed remoteSelect(): fetches (if needed) and sets selection by pk
  refCustomerSelect.value?.remoteSelect({ Id: id })
}
function reloadCustomers() {
  refCustomerSelect.value?.reload()
}
// Generate 20 sample users
const generateUsers = () => {
  const firstNames = ['Sok', 'Chantha', 'Vannak', 'Srey', 'Kong', 'Maly', 'Rith', 'Sopheap', 'Kimsour', 'Sovann'];
  const lastNames = ['Pich', 'Sok', 'Touch', 'Chea', 'Phann', 'Cheng', 'Kong', 'Nhem', 'Vann', 'Khat'];
  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations', 'Sales', 'Engineering', 'Support'];
  const genders = ['Male', 'Female', 'Male', 'Female', 'Male', 'Female'];
  
  const users = [];
  for (let i = 1; i <= 20; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const nameEn = `${firstName} ${lastName}`;
    const gender = genders[Math.floor(Math.random() * genders.length)];
    
    users.push({
      id: i,
      name: name,
      nameEn: nameEn,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      department: departments[Math.floor(Math.random() * departments.length)],
      gender: gender,
      avatar: `https://i.pravatar.cc/40?img=${i}`,
      IsCurrent: i === 1, // Mark first user as current for academicYear type
      RecordCount: 20
    });
  }
  console.log("Users ======================> ", users)
  return users;
};

// Local data configuration
const localUsersData = {
  data: generateUsers(),
  keySearch: ['name', 'nameEn', 'email', 'department']
};

// ---- 5: template mapping ----
const employees = ref([
  {
    Id: 21,
    Name: 'សុវណ្ណា',
    NameEnglish: 'Sovanna',
    Position: 'អ្នកគ្រប់គ្រង',
    PositionEnglish: 'Manager',
    AvatarUrl: '/avatars/sovanna.jpg',
    Gender: 'female'
  },
  {
    Id: 22,
    Name: 'វិចិត្រ',
    NameEnglish: 'Vichit',
    Position: 'អ្នកអភិវឌ្ឍន៍',
    PositionEnglish: 'Developer',
    AvatarUrl: '/avatars/vichit.jpg',
    Gender: 'male'
  }
])

// ---- 6: custom slot data ----
const branches = ref([
  { Id: 31, NameEnglish: 'Phnom Penh HQ', Address: 'Street 271', LogoUrl: '/logos/pp.png' },
  { Id: 32, NameEnglish: 'Siem Reap', Address: 'Road 6', LogoUrl: '/logos/sr.png' }
])

// ---- form state ----
const form = reactive({
  department: undefined,
  staffIds: [],
  customer: undefined,
  customerIds: [],
  employee: undefined,
  branch: undefined,
  a: undefined, b: undefined, c: undefined, d: undefined, e: undefined, f: undefined, g: undefined
})

function handleMultipleSelect(value) {
  console.log('Multiple select=========>:', value);
}

</script>

<style lang="scss" scoped>
.rselect-demo {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--sp-6, 24px);

  section {
    margin-bottom: var(--sp-8, 32px);
    padding-bottom: var(--sp-6, 24px);
    border-bottom: 1px solid var(--c-border);
  }

  h2 {
    font-size: 14px;
    margin-bottom: var(--sp-2, 8px);
    color: var(--c-muted);
  }

  pre {
    margin-top: var(--sp-2, 8px);
    font-size: 12px;
    background: var(--c-surface);
    padding: var(--sp-2, 8px);
    border-radius: var(--r-sm, 8px);
    overflow-x: auto;
  }

  .row {
    display: flex;
    gap: var(--sp-2, 8px);
    margin-top: var(--sp-2, 8px);
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--sp-3, 12px);
  }

  .branch-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .branch-logo { width: 24px; height: 24px; border-radius: 6px; }
  .branch-logo-sm { width: 16px; height: 16px; border-radius: 4px; }
  .branch-name { font-size: 13px; }
  .branch-sub { font-size: 11px; color: var(--c-muted); }
}
</style>