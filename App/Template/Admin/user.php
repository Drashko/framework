<?php
$this->start('body')?>
<!-- CONTENT -->
<?php
use src\Utility\Route;
use src\Utility\Paginator;

$errors   = $data['errors'] ?? [];
//TO DO move to config file or table
$statuses = ['pending' => 'Pending' , 'active' => 'Active' , 'blocked' => 'Blocked'];
$roles    = [ 1 => 'Client' , 2 => 'Customer', 5 => 'Admin'];
$page    = $_GET['page'] ?? 1;
$status  = $_GET['status'] ?? '';
$role_id = $_GET['role_id'] ?? '';




//pr(count($data['userList']));
?>
<form id="user-list" method="get" action="<?=$this->url('admin/user/index/')?>" class="uk-overflow-auto" enctype="multipart/form-data">
     <h2>User List</h2>
     <div class="uk-margin">
             <a href="#modal-user-create" uk-toggle class="uk-button uk-button-secondary uk-button-small" >Add user</a>
     </div>
     <div class="uk-margin uk-left">
                <select class="uk-select uk-width-small uk-form-small" id="role-select" name="role_id">
                    <option value="">Choose Role</option>
                    <?php foreach($roles as $key => $value) :?>
                        <option value="<?=$key?>" <?=$role_id == $key ? 'selected' : ''?>><?=$value?></option>
                    <?php endforeach; ?>
                </select>
                <select class="uk-select uk-width-small uk-form-small" id="status-select" name="status">
                    <option value="">Choose Status</option>
                    <?php foreach($statuses as $key => $value) :?>
                        <option value="<?=$key?>" <?=$status == $key ? 'selected' : ''?>><?=$value?></option>
                    <?php endforeach; ?>
                </select>
                <button id="button-filter" type="submit"  class="uk-button uk-button-primary uk-button-small">Search</button>
     </div>
     <div class="uk-margin uk-right ">
            <a  id="print" class="uk-button uk-button-default uk-button-small" href="">Print</a>
            <a  href="#modal-pdf" uk-toggle class="uk-button uk-button-default uk-button-small">PDF</a>
            <a  href="#modal-excel" uk-toggle class="uk-button uk-button-default uk-button-small">EXCEL</a>
            <a  href="#modal-csv" uk-toggle class="uk-button uk-button-default uk-button-small">CSV</a>
        </div>
        <hr>
    <div class="uk-overflow-container">
        <table class="uk-table uk-table-hover uk-table-striped">
            <input id="page" type="hidden" name="page" value="<?=$page?>">
            <!--input id="offset" type="hidden" name="offset" value=""-->
            <thead>
                <tr>
                    <th>ID</th><th>Role</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Ip</th><th>Status</th><th>CreatedAt</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <?php if(!empty($data['userList']) ){ ?>
            <?php foreach ($data['userList'] as $user) : ?>
            <tr>
                <td><?=$user->getId()?></td><td><?=$user->getRoleId()?></td><td><?=$user->getName()?></td><td><?=$user->getEmail()?></td><td><?=$user->getPhone()?></td><td><?=$user->getAddress()?></td><td><?=$user->getIp()?></td><td><?=$user->getStatus()?></td><td><?=$user->getCreatedAt()?></td>
                <td>
                    <div class="uk-button-group">
                        <button class="uk-button uk-button-small">Actions</button>
                        <div data-uk-dropdown="{mode:'click'}">
                            <a href="<?=$this->url("admin/user/update/{$user->getId()}")?>" class="uk-button uk-button-small"><span data-uk-icon="icon: refresh" class="uk-margin-small-right uk-icon"></span> Update </a>
                            <a  id="<?=$user->getId()?>" data-modal="delete"  class="uk-button uk-button-small "><span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span> Delete </a>
                        </div>
                    </div>
                </td>
            </tr>
            <?php endforeach; ?>
            <?php } else { ?>
                <tr>
                    <td colspan="10" style="text-align:center">No users found</td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
    </div>
    <!--Pagination-->
    <ul class="uk-pagination uk-flex-center" uk-margin>
        <!--li><a href="#"><span uk-pagination-previous></span></a></li-->
        <?php for($i=1; $i<=$data['paginatorPages']; $i++): ?>
            <li class="<?=($page == $i) ? 'uk-active' : ''?>" >
                <a class="paginator-link" data-page="<?=$i?>"><?=$i?></a>
            </li>
        <?php endfor; ?>
        <!--li><a href="#"><span uk-pagination-next></span></a></li-->
    </ul>
 </form>

<!--script>
    $('#button-filter').on('click', function() {
        let form = $('#user-list');
       let url = App.baseUrl() + '/admin/user/index/?';
       //for search filed
        var role_id = $('select[name=\'role_id\']').val();
        if (role_id !== '') {
            url += '&role_id=' + encodeURIComponent(role_id);
        }
        var status = $('select[name=\'status\']').val();
        if (status !== '') {
            url += '&status=' + encodeURIComponent(status);
        }
        location = url;
        form.submit();
    });
</script-->
<script>
    let form = $('#user-list');
    $('.paginator-link').on('click', function(){
        let page = $(this).data('page');
        $('#page').val(page);
        form.submit();
    });
</script>
<!--user-create modal popup-->
<?php $this->partial('Admin', 'modalUserCreate')?>
<!--export pdf  modal popup-->
<?php $this->partial('Admin', 'modalPdf')?>
<!--export excel  modal popup-->
<?php $this->partial('Admin', 'modalExcel')?>
<!--export csv  modal popup-->
<?php $this->partial('Admin', 'modalCsv')?>
<?php $this->end()?>


