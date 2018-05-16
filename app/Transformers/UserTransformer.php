<?php

namespace App\Transformers;

use App\User;

class UserTransformer extends League\Fractal\TransformerAbstract
{
    public function transform(User $user)
    {
        $scope = $this->getCurrentScope()->getIdentifer();

        return [
        'id' => $user->id,
        'name' => $user->name,
        'avatar' => $user->avatar($scope === 'user' || $scope == 'parent.users' ? 25 : 45)
        ];
    }

    
}
