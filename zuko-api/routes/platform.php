<?php

declare(strict_types=1);
use App\Orchid\Screens\DonationInfo\DonationInfoCreateScreen;
use App\Orchid\Screens\DonationInfo\DonationInfoEditScreen;
use App\Orchid\Screens\DonationInfo\DonationInfoScreen;
use App\Models\Category;
use App\Models\Post;
use App\Orchid\Layouts\Post\PostEditLayout;
use App\Orchid\Screens\Category\CategoryEditScreen;
use App\Orchid\Screens\Category\CategoryListScreen;
use App\Orchid\Screens\Examples\ExampleActionsScreen;
use App\Orchid\Screens\Examples\ExampleCardsScreen;
use App\Orchid\Screens\Examples\ExampleChartsScreen;
use App\Orchid\Screens\Examples\ExampleFieldsAdvancedScreen;
use App\Orchid\Screens\Examples\ExampleFieldsScreen;
use App\Orchid\Screens\Examples\ExampleGridScreen;
use App\Orchid\Screens\Examples\ExampleLayoutsScreen;
use App\Orchid\Screens\Examples\ExampleScreen;
use App\Orchid\Screens\Examples\ExampleTextEditorsScreen;
use App\Orchid\Screens\PlatformScreen;
use App\Orchid\Screens\Role\RoleEditScreen;
use App\Orchid\Screens\Role\RoleListScreen;
use App\Orchid\Screens\User\UserEditScreen;
use App\Orchid\Screens\User\UserListScreen;
use App\Orchid\Screens\User\UserProfileScreen;
use App\Orchid\Screens\Donor\DonorListScreen;
use App\Orchid\Screens\Donor\DonorEditScreen;
use App\Orchid\Screens\Publications\PublicationsListScreen;
use App\Orchid\Screens\Publications\PublicationsEditScreen;
use App\Orchid\Screens\Post\PostEditScreen;
use App\Orchid\Screens\Post\PostListScreen;
use App\Orchid\Screens\Block\BlockListScreen;
use App\Orchid\Screens\Block\BlockEditScreen;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;

/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the need "dashboard" middleware group. Now create something great!
|
*/

// Main
Route::screen('/main', PlatformScreen::class)
    ->name('platform.main');

// Platform > Profile
Route::screen('profile', UserProfileScreen::class)
    ->name('platform.profile')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Profile'), route('platform.profile')));

// Platform > System > Users > User
Route::screen('users/{user}/edit', UserEditScreen::class)
    ->name('platform.systems.users.edit')
    ->breadcrumbs(fn (Trail $trail, $user) => $trail
        ->parent('platform.systems.users')
        ->push($user->name, route('platform.systems.users.edit', $user)));

// Platform > System > Users > Create
Route::screen('users/create', UserEditScreen::class)
    ->name('platform.systems.users.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.systems.users')
        ->push(__('Create'), route('platform.systems.users.create')));

// Platform > System > Users
Route::screen('users', UserListScreen::class)
    ->name('platform.systems.users')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Users'), route('platform.systems.users')));

// Platform > System > Roles > Role
Route::screen('roles/{role}/edit', RoleEditScreen::class)
    ->name('platform.systems.roles.edit')
    ->breadcrumbs(fn (Trail $trail, $role) => $trail
        ->parent('platform.systems.roles')
        ->push($role->name, route('platform.systems.roles.edit', $role)));

// Platform > System > Roles > Create
Route::screen('roles/create', RoleEditScreen::class)
    ->name('platform.systems.roles.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.systems.roles')
        ->push(__('Create'), route('platform.systems.roles.create')));

// Platform > System > Roles
Route::screen('roles', RoleListScreen::class)
    ->name('platform.systems.roles')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Roles'), route('platform.systems.roles')));

Route::screen('donors', DonorListScreen::class)
    ->name('platform.donors')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Donors'), route('platform.donors')));

Route::screen('categories', CategoryListScreen::class)
    ->name('platform.categories')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Categories'), route('platform.categories')));

Route::screen('categories/create', CategoryEditScreen::class)
    ->name('platform.categories.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.categories')
        ->push(__('Create'), route('platform.categories.create')));

Route::screen('categories/{category}/edit', CategoryEditScreen::class)
    ->name('platform.categories.edit')
    ->breadcrumbs(fn (Trail $trail, $category) => $trail
        ->parent('platform.categories')
        ->push($category->id, route('platform.categories.edit', $category)));

Route::screen('posts', PostListScreen::class)
    ->name('platform.posts')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Posts'), route('platform.posts')));

Route::screen('posts/create', PostEditScreen::class)
    ->name('platform.posts.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.posts')
        ->push(__('Create'), route('platform.posts.create')));

Route::screen('posts/{post}/edit', PostEditScreen::class)
    ->name('platform.posts.edit')
    ->breadcrumbs(fn (Trail $trail, Post $post) => $trail
        ->parent('platform.posts')
        ->push(route('platform.posts.edit', $post)));

Route::screen('donors/create', DonorEditScreen::class)
    ->name('platform.donors.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.donors')
        ->push(__('Create'), route('platform.donors.create')));

Route::screen('donors/{donor}/edit', DonorEditScreen::class)
    ->name('platform.donors.edit')
    ->breadcrumbs(fn (Trail $trail, $donor) => $trail
        ->parent('platform.donors')
        ->push($donor->id, route('platform.donors.edit', $donor)));

Route::screen('publications/create', PublicationsEditScreen::class)
->name('platform.publications.create')
->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.publications')
    ->push(__('Create'), route('platform.publications.create')));

Route::screen('publications/{publication}/edit', PublicationsEditScreen::class)
    ->name('platform.publications.edit')
    ->breadcrumbs(fn (Trail $trail, $publication) => $trail
        ->parent('platform.publications')
        ->push($publication->id, route('platform.publications.edit', $publication)));
Route::screen('publications', PublicationsListScreen::class)
    ->name('platform.publications')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Publications'), route('platform.publications')));
Route::screen('donation_info', DonationInfoScreen::class)
    ->name('platform.donation_info')
    ->breadcrumbs(fn (Trail $trail) => $trail
        ->parent('platform.index')
        ->push(__('Donation Info'), route('platform.donation_info')));

Route::screen('donation_info/{donation}/edit', DonationInfoEditScreen::class)
    ->name('platform.donation_info.edit')
    ->breadcrumbs(fn (Trail $trail, $donation) => $trail
        ->parent('platform.donation_info')
        ->push($donation->id, route('platform.donation_info.edit', $donation)));

Route::screen('donation_info/create', DonationInfoCreateScreen::class)
    ->name('platform.donation_info.create')
    ->breadcrumbs(fn (Trail $trail) => $trail
    ->parent('platform.donation_info')
    ->push(__('Create'), route('platform.donation_info.create')));


Route::screen('posts/{post}/blocks/create', BlockEditScreen::class)
    ->name('platform.blocks.create')
    ->breadcrumbs(fn (Trail $trail, $post) => $trail
        ->parent('platform.posts')
        ->push('Add block', route('platform.blocks.create',$post)));

Route::screen('blocks/{block}/edit', BlockEditScreen::class)
    ->name('platform.blocks.edit')
    ->breadcrumbs(fn (Trail $trail, $block) => $trail
        ->parent('platform.posts')
        ->push($block->id, route('platform.blocks.edit',$block)));