<?php $this->start('body');

use src\Utility\H;
use src\Utility\Status;

$errors       = $data['errors'] ?? [];
$statusList   = Status::Project;
$roles      = [ 1 => 'Client' , 2 => 'Customer', 5 => 'Admin'];
?>
<!-- CONTENT -->
<div class="uk-width-large">
    <?php if(isset($errors)){ ?>
        <?php foreach($errors as $error) { ?>
            <div class="uk-alert-danger" uk-alert>
                <a class="uk-alert-close" uk-close></a>
                <p><?=$error?></p>
            </div>
        <?php  } ?>
    <?php  } ?>
    <h2>Project detail #<?=$id?></h2>
    <div class="uk-margin"></div>
    <hr>
    <form class="toggle-class" action="<?=$this->url("admin/project/detail/{$id}")?>" method="post">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <div class="uk-width-1-1">
                    <label class="uk-form-label">Name</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-border" required placeholder="Name" name="name" type="text" value="<?=H::out($projectData->getName())?>"><!--?= $userData->getName() ?? '' ?>-->
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                    <label class="uk-form-label">Description</label>
                    <textarea rows="5" class="uk-border uk-textarea" required placeholder="Description" name="description"><?=H::out($projectData->getDescription())?> </textarea>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Client</label>
                <select class="uk-select" id="form-stacked-select" name="status">
                    <?php foreach($statusList as $key => $value) :?>
                        <option value="<?=$value['id']?>" <?= ($value['id'] == $projectData->getStatus()) ? 'selected' : ''?>><?=H::out($value['name'])?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="uk-margin-bottom">
                <button type="submit"  class="uk-button uk-button-primary uk-border uk-width-1-1">Save</button>
            </div>
        </fieldset>
    </form>
</div>
<?php $this->end()?>
