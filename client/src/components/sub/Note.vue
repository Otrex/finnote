<template>
<div class="note">
<div class="row">
<div class="col-md-6">
<div class="title">
<slot name="title"></slot>
</div>
</div>
<div class="col-md-6">
<div class="date">
<slot name="date"></slot>
</div>
</div>
<div class="col-md-12">
<div class="content">
<slot name="content"></slot>
</div>
</div>
</div>
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
export default {
	name: "Note"
};
</script>
<style>
.note {
	background: rgba(255,255,255,.8);
	color: black;
	border-radius: 8px;
	min-height: 100px;
	padding: 20px;
	margin-bottom: 20px;
}
.title , .date {
	font-weight: bold;
}
.date {
	text-align: right;
}
</style>
